import React, { useState } from "react";
import { useFormik } from "formik";
import { signUp } from "../../helpers/authServices";
import { STATUS_TYPES } from "../../helpers/constants/Constant";
import { basicSchima } from "./schemas";
import "../../styles/Singup.css";
//import { useAuthContext } from "../../contexts/AuthContextProvider";
import Alert from "./alerts/Alert";
import { BUTTON_WRAPPER_STYLES, OTHER_CONTENT_STYLES } from "./ForgotPassword";



export const initialValues = {
  first_name: "",//check the values with api
  last_name: "",
  email: "",
  password: "",
  confirmpassword: ""

}
const Signup = () => {
  const [isError, setIsError] = useState(false)
  // const {toggleLogin, loggedin, randomToken} = useAuthContext()
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState({
    info: "Testing is completed",
    variant: null,
    title: null
  });
 
  const onSubmit = async (values) => {
    console.log(values)
    const respData =signUp(values.first_name,values.last_name,values.email,values.password)
    respData.then((signdetails) =>{
      console.log(signdetails,"signup")
      const {data:{message},error}= signdetails//nested obj distractiondata:{message}
      //obj distraction{data.message}
      //use try nd catch for error suspeted code

      if(message){//destration 
        setMessage({ info: message,varient:STATUS_TYPES.success });
        setIsOpen(true)
      } else{
        setMessage({ 
          info: Array.isArray(error)? error[0].msg:error,//checking dta is in array or not
//
          varient:STATUS_TYPES.error });
      setIsOpen(true)
      }
  })
  }
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: basicSchima,
    onSubmit,
  });

  return (
    <div className="signupform">
      <form className="signup" onSubmit={handleSubmit} autoComplete="off">
        <h2>Sign up</h2>
        <div>
          <label htmlFor="firstname">firstname: </label>
          <input
            value={values.first_name}
            onChange={handleChange}
            placeholder="Enter Firstname"
            type="text"
            id="first_name"
            onBlur={handleBlur} /><br />
        </div>
        <div>
          <label htmlFor="lastname">Lastname: </label>
          <input
            value={values.last_name}
            onChange={handleChange}
            placeholder="Enter Lastname"
            type="text"
            id="last_name"
            onBlur={handleBlur} /><br />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            value={values.email}
            onChange={handleChange}
            id="email"
            type="email"
            placeholder="Enter your email"
            onBlur={handleBlur}
            className={errors.email && touched.email ? "input-error" : ""} />
          {errors.email && touched.email ? <div>
            {errors.email}
          </div> : null}
        </div>
        <br />
        <div>
          <label htmlFor="password">Password: </label>
          <input
            value={values.password}
            onChange={handleChange}
            id="password"
            type="password"
            placeholder="Enter your password"
            onBlur={handleBlur}
          />
        </div><br />
        <div>
          <label htmlFor="confirmpassword">confirmPassword: </label>
          <input
            value={values.confirmpassword}
            onChange={handleChange}
            id="confirmpassword"
            type="password"
            placeholder="confirm password"
            onBlur={handleBlur}
            className={
              errors.confirmpassword && touched.confirmpassword ? "input-error" : ""
            }
          />
          {
            errors.confirmpassword && touched.confirmpassword && (
              <p className="error">{errors.confirmpassword}</p>
            )
          }

          <br />
        </div>
        <div>
          <button type="submit">Signup</button>
        </div>
        <div style={BUTTON_WRAPPER_STYLES}> {/* importing from frgot pswd*/}
          <button onClick={() => setIsOpen(true)}>close model</button>

          <Alert open={isOpen} onClose={() => setIsOpen(!isOpen)} message={message}>
            {message.variant === STATUS_TYPES.error ? "Error" : "Success"}
          </Alert>
        </div>
        <div style={OTHER_CONTENT_STYLES} />


      </form>
      {/* <button onClick={toggleLogin}>Toggle</button>
      {JSON.stringify(loggedin)}
      {JSON.stringify(randomToken)} */}
    </div>
  );
};
export default Signup