import dbConnect from "@/db/mongoose";
import Recipe from "@/db/models/Recipe";

export default async function handler(req, res) {
  await dbConnect(process.env.MONGODB_URI);
  try {
    let newRecipe = await Recipe.create(req.body);
    res.status(200).json(newRecipe);
  } catch (e) {
    res.status(500).json(e.message);
  }
}
