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
  role: {
    type: String,
    enum: ["admin", "regular"],
  },
});

export default mongoose.model("User", UserSchema);
