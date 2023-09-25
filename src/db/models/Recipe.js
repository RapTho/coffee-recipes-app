const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema(
  {
    roaster: {
      type: String,
      maxLength: 50,
      required: true,
    },
    bean: {
      type: String,
      maxLength: 500,
      required: true,
    },
    input: {
      type: Number,
      min: 0,
      max: 30,
      required: true,
    },
    output: {
      type: Number,
      min: 20,
      max: 60,
      required: true,
    },
    mill: {
      type: Number,
      min: 0,
      max: 40,
      required: true,
    },
  },
  { timestamps: true }
);

// use '$**' as key to index all string fields
RecipeSchema.index({
  roaster: "text",
  bean: "text",
});

export default mongoose.models.Recipe || mongoose.model("Recipe", RecipeSchema);
