import jwt from "jsonwebtoken";
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  try {
    if (!token) return res.status(403).json("you are not authorized");

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err || !user) return res.status(403).json("invalid token");

      req.user = user;
      next();
    });
  } catch (err) {
    console.log(err);
  }
};
