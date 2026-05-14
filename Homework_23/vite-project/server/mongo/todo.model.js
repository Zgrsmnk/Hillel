import { Schema, model } from "mongoose";

const TodoSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
});

export default model("Todos", TodoSchema);
