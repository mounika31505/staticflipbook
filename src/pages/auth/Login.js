import { useFormik } from "formik";
import { basicSchima } from "./schemas"
import { useState } from "react";
import "../../styles/Login.css";


export const initialValues = {
  email: "",
  password: ""
}

const Login = () => {

  const [isError, setIsError] = useState(false);
  document.title = "Login | Educamp"

  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsError(true);
    actions.resetForm()
  };

  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: basicSchima,
    onSubmit,
  });



  console.log(values, errors);
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
      {isError && <p style={{ color: "red" }}>Invalid credentials. please try again.</p>}
    </div>
  );
};
export default Login