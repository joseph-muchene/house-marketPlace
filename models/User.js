import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 51,
  },
  email: {
    type: String,
    required: true,
  },
  profilePhoto: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    default: 0,
  },
});

export default mongoose.model("User", UserSchema);
