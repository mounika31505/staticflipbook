import { useFormik } from "formik";
const Reset = () => {
  const formik = useFormik({
    initialValues: {
      email: ""
    },
  });
  console.log(formik);
  return (

    <form autoComplete="off">
      <lable htmlFor="email">Email</lable><br />
      <input
        value={formik.values.email}
        onChange={formik.handleChange}
        id="email"
        type="email"
        placeholder="Enter your email"
      /><br />
      <button type="submit">submit</button>

    </form>
  );
};
export default Reset

