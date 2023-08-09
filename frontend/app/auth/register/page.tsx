"use client";

import { useGenerationStore } from "@/state/store";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";

const register = () => {
  const router = useRouter();
  if (useGenerationStore.getState().isLogged) {
    router.push("/timeline");
  }

  const formik = useFormik({
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
  });
  console.log(formik.values);

  return (
    <div className=" w-full h-screen flex items-center justify-center ">
      <img src=".././hero.jpg" className="w-1/2 h-full" alt="" />
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white flex rounded-lg w-1/2 font-latoRegular"
      >
        <div className="flex-1 text-gray-700  p-20">
          <h1 className="text-3xl pb-2 font-latoBold text-center">Register</h1>

          <div className="mt-6  px-8">
            {/* Name input field */}
            <div className="pb-4">
              <label
                htmlFor="name"
                className={`block font-latoBold text-sm pb-2  `}
              >
                Email
              </label>

              <input
                className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500 "
                type="text"
                name="email"
                placeholder="Enter your name"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <p className="text-sm h-[10px] font-latoBold text-red-400 ">
                {formik.errors.email ? formik.errors.email : ""}
              </p>
            </div>
            {/* Email input field */}
            <div className="pb-4">
              <label
                htmlFor="email"
                className={`block font-latoBold text-sm pb-2 `}
              >
                {" "}
                Password
              </label>

              <input
                className="border-2 w-full border-gray-500 p-2 rounded-md  focus:border-teal-500 focus:ring-teal-500"
                type="email"
                name="password"
                placeholder="Enter your email address"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <p className="text-sm h-[10px] font-latoBold text-red-400 ">
                {formik.errors.password ? formik.errors.password : ""}
              </p>
            </div>

            {/* Terms of service*/}
            <div className="pb-4">
              <label
                htmlFor="terms"
                className={`block font-latoBold text-sm pb-2 `}
              >
                Terms of service
              </label>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="terms"
                  value="checked"
                  className="h-5 w-5 text-teal-500 border-2  background-gray-500 focus:border-teal-500 focus:ring-teal-500"
                  onChange={formik.handleChange}
                />
                <p className="text-sm font-latoBold text-gray-500">
                  I agree to the Terms and Service that my data will be taken
                  and sold.
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="bg-teal-500 font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
            >
              Start learning today!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default register;
