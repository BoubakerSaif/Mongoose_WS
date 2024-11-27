import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

export default mongoose.model("User", userSchema);
