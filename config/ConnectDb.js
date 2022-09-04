import mongoose from "mongoose";

export const ConnectDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost/house-marketPlace",
      (err, data) => {
        if (err || !data) return new Error(err);
        else {
          return console.log("mongodb connected");
        }
      }
    );
  } catch (err) {
    return new Error(err);
  }
};
