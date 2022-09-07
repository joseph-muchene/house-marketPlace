import User from "../models/User.js";
import bcrypt from "bcryptjs";
// register a user
export const Register = async (req, res) => {
  // check if email already exists
  if (await User.findOne({ email: req.body.email })) {
    return res.status(400).json("user already exists");
  }
  const password = req.body.password;

  let salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);
  const { _, ...others } = req.body;
  const { name, email, profilePhoto, phoneNumber, role } = others;
  const newUser = new User({
    password: hashed,
    name,
    email,
    profilePhoto,
    phoneNumber,
    role,
  });

  const user = await newUser.save();

  return res.status(200).json(user);
};

// update user
export const UpdateUser = async (req, res) => {
  await User.findByIdAndUpdate(
    { _id: req.user.userId.toString() },
    { $set: req.body },
    { new: true },
    (err, updated) => {
      if (err || !data) return res.status(400).json("could not update");
      return res.status(200).json(updated);
    }
  );
};

export const deleteUser = async (req, res) => {
  const userId = req.params.userId;

  if (!req.user.userId.toString() === userId) {
    return res.status(403).json("you are not allowed to do this");
  }
  //   find the user by id
  await User.findByIdAndRemove(userId).exec((err, data) => {
    if (err || !data) return res.status(400).json("something went wrong");
    return res.status(200).json(data);
  });
};

export const SignedUser = (req, res) => {
  const user = req.user;
  return res.status(200).json(user);
};

export const getUserById = async (req, res) => {
  const user = await User.findById(req.params.userId);

  if (!user) {
    return res.status(400).json("something went wrong");
  } else {
    return res.status(200).json(user);
  }
};

export const isAdmin = async (req, res, next) => {
  //   get the user by id
  const user = await User.findById(req.user.userId);
  //   check role

  if (user.role === "1") {
    next();
  } else {
    return res.status(403).json("Not authorized");
  }
};
