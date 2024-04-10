import mongoose from "mongoose";

const UserDetailSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const UserDetailModel = mongoose.model("userDetail", UserDetailSchema);
