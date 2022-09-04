import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
export const LoginUser = async (req, res) => {
  // check if the user is registered
  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.status(404).json("Not found");

  //   check if the password matches
  const matchedPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!matchedPassword) {
    return res.status(400).json("invalid credentials");
  } else {
    // generate token
    const payload = {
      userId: user._id,
    };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "30d" },
      (err, token) => {
        if (err || !token) return res.status(400).json("something went wrong");
        //    set cookie

        const { password, ...others } = user._doc;

        return res
          .cookie("access_token", token, {
            httpOnly: true,
          })
          .status(200)
          .json(others);
      }
    );
  }
};
