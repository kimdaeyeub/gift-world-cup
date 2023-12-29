import mongoose, { Schema, models, model } from "mongoose";

const ResultSchema = new Schema({
  player: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  worldcup: {
    type: [Schema.Types.ObjectId],
    ref: "WorldCup",
  },
});

const Result = models.Result || model("Result", ResultSchema);

export default Result;
