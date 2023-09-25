import dbConnect from "@/db/mongoose";
import Recipe from "@/db/models/Recipe";

export async function getDocument(id) {
  return await Recipe.findOne({ _id: id });
}

export default async function handler(req, res) {
  const data = await getDocument(req.query.id);

  if (!data) {
    res.status(500).json({ error: "Failed to fetch data" });
  }

  res.status(200).json(data);
}
