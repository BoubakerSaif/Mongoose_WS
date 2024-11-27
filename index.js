import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userModel from "./Models/userModel.js";

const app = express();
dotenv.config();
mongoose.connect(process.env.DB_URL).then(console.log("DB Connected"));

const PORT = process.env.PORT || 4000;

// async function start() {
//   const person = await userModel.create({
//     name: "Saif",
//     age: 28,
//     favoriteFoods: ["Pizza"],
//   });
// }
// start();
// async function start() {
//   const arrayofPeoples = [
//     { name: "Nour", age: 20, favoriteFoods: ["Hamburger"] },
//     { name: "Ines", age: 19, favoriteFoods: ["Pizza"] },
//   ];

//   await userModel.create(arrayofPeoples);
// }

// async function start() {
//   console.log(await userModel.find());
// }
// start();

// async function start() {
//   console.log(await userModel.findOne({ name: "Saif" }));
// }
// start();

// async function start() {
//   console.log(await userModel.findById("674770b96339cd81e868f4cb"));
// }

// async function start() {
//   await userModel.findByIdAndUpdate("674770b96339cd81e868f4cb", {
//     $push: { favoriteFoods: "Juice" },
//   });
// }

// async function start() {
//   await userModel.findByIdAndUpdate("674770b96339cd81e868f4cb", { age: 18 });
// }

// start();

// async function start() {
//   await userModel.findOneAndUpdate(
//     { name: "Ines" },
//     { favoriteFoods: ["Hamburger"] }
//   );
// }

// async function start() {
//   await userModel.findByIdAndDelete("67476efa776e79f2b976e2d4");
// }

// start();

async function start() {
  const search = await userModel
    .find({ favoriteFoods: "Pizza" })
    .select("name -_id");

  console.log(search);
}

start();

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
