import Recipe from "@/db/models/Recipe";

export default async function handler(req, res) {
  try {
    let newRecipe = new Recipe(req.body);
    await newRecipe.save();
    res.status(200).json(newRecipe);
  } catch (e) {
    res.status(500).json(e.message);
  }
}
