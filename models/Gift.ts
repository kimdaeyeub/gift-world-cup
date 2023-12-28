import mongoose, { Schema, models, model } from "mongoose";

const GiftSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  image: {
    type: String,
    required: [true, "Image is required"],
  },
  title: {
    type: String,
    required: [true, "title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  tags: {
    type: [String],
    required: [true, "tag is required"],
  },

  count: {
    type: Number,
    default: 0,
  },
});

const Gift = models.Prompt || model("Gift", GiftSchema);

export default Gift;
