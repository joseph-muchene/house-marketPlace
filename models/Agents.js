import mongoose from "mongoose";

const AgentSchema = new mongoose.Schema({
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
});

export default mongoose.model("Agent", AgentSchema);
