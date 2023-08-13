import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");

    if (!token) {
      return res.status(403).send("Access Denied");
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const isAuthenticated = async (req, res, next) => {
  let token = req.cookies.token;
  if (req.cookies && req.cookies.token) {
    try {
      console.log(token);

      let decoded = jwt.verify(token, process.env.JWT_SECRET);

      if (decoded) {
        res.send({ isAuthenticated: true });
        req.user = verified;
        next();
      } else {
        res.send({ isAuthenticated: false });
      }
    } catch (err) {
      res.send({ isAuthenticated: false });
      res.status(500).json({ error: err.message });
    }
  }
};
