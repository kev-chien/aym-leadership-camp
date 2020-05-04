const mongoose = require("mongoose");
const { Schema } = mongoose;

const goalSchema = new Schema({
  name: String,
  note: String,
  initials: String,
  highlighted: {
    type: Boolean,
    default: false
  },
  date_created: {
    type: Date,
    default: Date.now,
  },
});

const Goal = mongoose.model("goals", goalSchema);
