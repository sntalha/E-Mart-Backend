import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "user", enum: ["user", "admin"] },
    token: { type: String, default: "" },
    otp: {
      value: { type: String, default: "" },
      expiresAt: { type: Date, default: Date.now() },
      isVerified: { type: Boolean, default: false },
    },
  },
  { timestamps: true }
);

export const userModel =  mongoose.model("User", userSchema);
