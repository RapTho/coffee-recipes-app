import dbConnect from "@/db/mongoose";
import Recipe from "@/db/models/Recipe";

export default async function handler(req, res) {
  await dbConnect(process.env.MONGODB_URI);

  const body = {
    $set: {
      ...req.body.data,
    },
  };

  try {
    const result = await Recipe.updateOne({ _id: req.body.id }, body);

    res.status(200).json(result);
  } catch (e) {
    res.status(500).json(e.message);
  }
}
