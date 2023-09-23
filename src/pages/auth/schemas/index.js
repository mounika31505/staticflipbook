import * as yup from "yup";

const PasswordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const basicSchima = yup.object().shape({
    email:yup.string().email("please enter a valid email")
    .matches(emailRegex , {message:"please enter a valid email"}) 
    .required("Required"),
    password: yup
    .string()
    .min(5)
    .matches(PasswordRules , {message:"please create a stronger password"}) 
    .required("Required"),
   // confirmPassword: yup
   // .string()
    //.oneOf([yup.ref("password"),null],"pssword must match")
    //.required("Required"),
});