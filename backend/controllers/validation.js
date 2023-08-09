import mongoose from "mongoose";
import User from "../models/User.js";

const validate = async (req, res) => {
  const { email, password } = req.body;
  let exists = await User.exists({
    email: email,
    password: password,
  });
};
