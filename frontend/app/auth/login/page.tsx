"use client";

import { useFormik } from "formik";
import axios from "axios";
import { useRouter } from "next/navigation";
import useAuthStore from "@/state/store";
import { useEffect } from "react";
import LoginForm from "@/components/LoginForm";
import { yupLoginSchema } from "@/utils/yupSchemas";
axios.defaults.withCredentials = true;

const login = () => {
  const router = useRouter();

  let { setUser } = useAuthStore();
  let { user } = useAuthStore();

  useEffect(() => {}, []);

  const formik = useFormik(yupLoginSchema);

  return <LoginForm formik={formik} />;
};

export default login;
