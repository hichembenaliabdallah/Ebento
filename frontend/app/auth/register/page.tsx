"use client";

import useAuthStore from "@/state/store";
import { useFormik, FormikProps } from "formik";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { yupRegisterSchema } from "@/utils/yupSchemas";
import RegisterForm from "@/components/RegisterForm";

const register = () => {
  const router = useRouter();
  let { user } = useAuthStore();
  useEffect(() => {
    if (user != null) {
      router.replace("/timeline"); // Or wherever you'd like to redirect
    }
  }, [user]);

  const formik = useFormik(yupRegisterSchema);

  return <RegisterForm formik={formik} />;
};

export default register;
