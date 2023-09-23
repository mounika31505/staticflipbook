import React from "react";
import { useFormik } from "formik";
import { basicSchima } from "./schemas";
import "../../styles/Singup.css";
import { useAuthContext } from "../../contexts/AuthContextProvider";

const Signup = () => {
  const {toggleLogin, loggedin, randomToken} = useAuthContext()
  
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmpassword: ""

    },
  });
  // console.log(formik);
  return (
    <div className="signupform">
      <form className="signup" autoComplete="off">
        <h1>Sign up</h1>
        <div>
          <lable htmlFor="email">Email</lable><br />
          <input
            value={values.email}
            onChange={handleChange}
            id="email"
            type="email"
            placeholder="Enter your email"
            onBlur={handleBlur}
            className={errors.email && touched.email ? "input-error" : ""} />
            {errors.email && touched.email ?<div>
            {errors.email}
          </div>:null}
        </div>
        <br />
        <div>
          <lable htmlFor="password">Password</lable> <br />
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

          <lable htmlFor="confirmpassword">confirmPassword</lable> <br />
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
        </div>
        <br />
        <button type="submit">Signup</button>

      </form>
      <button onClick={toggleLogin}>Toggle</button>
      {JSON.stringify(loggedin)}
      {JSON.stringify(randomToken)}
    </div>
  );
};
export default Signup