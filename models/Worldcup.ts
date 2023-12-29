import mongoose, { Schema, models, model } from "mongoose";

const WorldcupSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  gifts: {
    type: [Schema.Types.ObjectId],
    ref: "Gift",
  },
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  round: {
    type: Number,
    required: [true, "Round is required"],
  },
});

const WorldCup = models.WorldCup || model("WorldCup", WorldcupSchema);

export default WorldCup;
