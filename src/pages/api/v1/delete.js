import clientPromise from "../../../db/mongoose";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const id = req.body.id;

  try {
    const db = client.db(process.env.MONGODB_DB);
    const col = db.collection(process.env.MONGODB_COLLECTION);

    await col.deleteOne({ _id: new ObjectId(id) });

    res.status(200).json({});
  } catch (e) {
    res.status(500).json(e.message);
  }
}
