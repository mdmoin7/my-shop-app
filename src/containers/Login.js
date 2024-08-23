import { Formik, Form, Field, ErrorMessage } from "formik";
import useLogin from "../hooks/useLogin";
import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string().required("Email is required").email(),
  password: Yup.string().required().min(6),
});

function Login() {
  const login = useLogin();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => login(values)}
      validationSchema={schema}
    >
      <Form>
        <Field name="email" type="email" placeholder="email" />
        <ErrorMessage name="email" />
        <Field name="password" type="password" placeholder="password" />
        <ErrorMessage name="password" />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}
export default Login;
