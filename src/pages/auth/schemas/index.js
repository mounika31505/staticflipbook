import * as yup from "yup";

const PasswordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchima = yup.object().shape({
    email:yup.string().email("please enter a valid email").required("Required"),
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