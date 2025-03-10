import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: 
  Yup.string()
  .min(3, "Email must be at least 3 characters")
  .email("Invalid email address")
  .required("Email is required"),

  password: 
  Yup.string()
  .min(3, "Password must be at least 3 characters")
  .max(10, "Password must be less than 10 characters")
  .required("Password is required"),
});
export default loginSchema;