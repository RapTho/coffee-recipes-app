import dbConnect from "@/db/mongoose";
import Recipe from "@/db/models/Recipe";

export default async function handler(req, res) {
  await dbConnect(process.env.MONGODB_URI);

  const id = req.body.id;

  try {
    await Recipe.deleteOne({ _id: id });

    res.status(200).json({});
  } catch (e) {
    res.status(500).json(e.message);
  }
}
