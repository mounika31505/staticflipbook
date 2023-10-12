import React from "react";
import { useFormik } from "formik";
import { LogIN } from "../../helpers/authServices";
import { basicSchima } from "./schemas"
import { STATUS_TYPES } from "../../helpers/constants/Constant";
import { useContext, useState } from "react";
import "../../styles/Login.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useAuthContext } from "../../contexts/AuthContextProvider";
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
//import { loginform, validationcheck } from "../../helpers/utils";
import { ToastContainer } from "react-toastify";
import Alert from "./alerts/Alert";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zindex: 1
}
const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColour: 'red',
  padding: '10px'
}

export const initialValues = {
  email: "",
  password: ""
}

const Login = () => {
  const { toggleLogin, setToken } = useAuthContext()

  const [isError, setIsError] = useState(false);
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState({
    info: "Testing is completed",
    variant: null,
    title: null
  });
  document.title = "Login | Educamp"

  const onSubmit = async (values, actions) => {
    // toggleLogin()
    console.log(values);
    let formData = new FormData()
    formData.append("username", values.email)
    formData.append("password", values.password)
    const respData = LogIN(formData)
    respData.then((res) => {
      console.log(res, "login")
      const { error, data } = res;
      console.log(error, "inside eror")
      // if (data) {//destration 
      //   localStorage.setItem("authToken",data.access_token)
      //   setMessage({ info: "Successfully login, please wait..", varient: STATUS_TYPES.success });
      //   setIsOpen(true)
      // } else {
      //   setMessage({ info: error, varient: STATUS_TYPES.error });
      //   setIsOpen(true)
      // }

    })
    /*  const mockCreds = loginform();
   
     const resptoken = validationcheck(values,mockCreds) */
    // console.log("resptokk", resptoken)
    /* if(resptoken){
      setToken(resptoken)
      toggleLogin();
    } */
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

  if (localStorage.getItem("AuthToken")) {
    // history.push("/");
    window.location.assign("/")
  }
  return (
    <div className="loginform">
      <form className="mail" onSubmit={handleSubmit} autoComplete="off">
        <h1>Login</h1>
        <div>
          <label htmlFor="email">Email</label><br />
          <input
            value={values.email}
            onChange={handleChange}
            id="email"
            type="email"
            placeholder="Enter your email"
            onBlur={handleBlur}
            className={errors.email && touched.email ? "input-error" : ""}
          />
          {errors.email && touched.email ? <div>
            {errors.email}
          </div> : null}
        </div>

        <br />
        <div>
          <label htmlFor="password">Password</label> <br />
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
        <div>
          <button disabled={isSubmitting} type="submit">Login</button>
        </div>

        <div style={BUTTON_WRAPPER_STYLES}>
          <button onClick={() => setIsOpen(true)}>close model</button>

          <Alert open={isOpen} onClose={() => setIsOpen(!isOpen)} message={message}>
            {message.variant === STATUS_TYPES.error ? "Error" : "Success"}
          </Alert>
        </div>
        <div style={OTHER_CONTENT_STYLES} />


      </form>
      <div>
        <NavLink to="/">Go Home</NavLink>
      </div>
      {isError && <p style={{ color: "red" }}>Invalid credentials.please try again.</p>}

      {/* <ToastContainer position="top-center" autoClose={4000} /> */}

    </div>
  );
};
export default Login