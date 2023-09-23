import React from "react";
import { useFormik } from "formik";
import { basicSchima } from "./schemas"
import { useContext, useState } from "react";
import "../../styles/Login.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useAuthContext } from "../../contexts/AuthContextProvider";
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import { loginform, validationcheck } from "../../helpers/utils";
import { ToastContainer } from "react-toastify";

export const initialValues = {
  email: "",
  password: ""
}

const Login = () => {
  const {toggleLogin, setToken} = useAuthContext()

  const [isError, setIsError] = useState(false);
 const history = useHistory();
  document.title = "Login | Educamp"

  const onSubmit = async (values, actions) => {
    // toggleLogin()
    const mockCreds = loginform();
   // console.log(values);
    const resptoken = validationcheck(values,mockCreds)
   // console.log("resptokk", resptoken)
    if(resptoken){
      setToken(resptoken)
      toggleLogin();
    }
    // console.log(actions);
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // setIsError(true);
    // actions.resetForm()
  };

  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: basicSchima,
    onSubmit,
  });

  if(localStorage.getItem("AuthToken")){
    // history.push("/");
    window.location.assign("/")
  }
  return (
    <div className="loginform">
      <form className="mail" onSubmit={handleSubmit} autoComplete="off">
        <h1>Login</h1>
        <div>
          <lable htmlFor="email">Email</lable><br />
          <input
            value={values.email}
            onChange={handleChange}
            id="email"
            type="email"
            placeholder="Enter your email"
            onBlur={handleBlur}
            className={errors.email && touched.email ? "input-error" : ""}
          />
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
            className={errors.password && touched.password ? "input-error" : ""}
          />
        </div>

        <br />
        <button disabled={isSubmitting} type="submit">Login</button>
      </form>
      <div>
        <NavLink to="/">Go Home</NavLink>
      </div>
      {isError && <p style={{ color: "red" }}>Invalid credentials. please try again.</p>}
      
      <ToastContainer position="top-center" autoClose={4000} />
    </div>
  );
};
export default Login