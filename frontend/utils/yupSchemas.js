import * as Yup from "yup";

export const yupRegisterSchema = {
  initialValues: {
    email: "",

    password: "",
    terms: "",
  },
  validationSchema: Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .min(20, "email too short")
      .required("Email is required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    terms: Yup.array().required("Terms of service must be checked"),
  }),
  onSubmit: (values) => {},
};

export const yupLoginSchema = {
  initialValues: {
    email: "",

    password: "",
  },
  validationSchema: Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  }),
  onSubmit: (values) => {
    axios
      .post("http://localhost:3001/auth/login", values)
      .then((response) => {
        console.log(response.data);
        if (response.status === 200 && response.statusText === "OK") {
          router.push("/timeline");
          console.log(response.data);

          setUser(response.data.user);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
