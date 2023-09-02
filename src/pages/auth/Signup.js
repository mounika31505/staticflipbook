import { useFormik } from "formik";

const Signup = () => {
  const  {values, errors, touched, handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmpassword:""

    },
  });
  // console.log(formik);
  return (
  
    <form autoComplete="off">
      <lable htmlFor="email">Email</lable><br />
      <input
        value={values.email}
        onChange={handleChange}
        id="email"
        type="email"
        placeholder="Enter your email" 
        onBlur={handleBlur} /><br />

      <lable htmlFor="password">Password</lable> <br />
      <input
        value={values.password}
        onChange={handleChange}
        id="password"
        type="password"
        placeholder="Enter your password"
        onBlur={handleBlur} /><br />

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
          <br />
        <button type="submit">Signup</button>

    </form>
  );
};
export default Signup