"use client";

import useAuthStore from "@/state/store";
import React from "react";
import axios from "axios";
function app() {
  axios.get("http://localhost:3001/user").then((res) => console.log(res));

  return <div className="text-black font-bold"></div>;
}

export default app;
