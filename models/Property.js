import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["rent", "sell"],
    },
    title: {
      type: String,
      required: true,
      maxLength: 100,
    },
    description: {
      type: String,
      maxLength: 255,
      required: true,
    },
    longitude: {
      type: String,
      default: 0,
    },
    latitude: {
      type: String,
      default: 0,
    },
    managedBy: {
      type: String,
    },

    photos: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Property", PropertySchema);
