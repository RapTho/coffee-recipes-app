import clientPromise from "../../../db/connect";
import { ObjectId } from "mongodb";

export async function getDocument(id) {
  const client = await clientPromise;

  const db = client.db(process.env.MONGODB_DB);
  const col = db.collection(process.env.MONGODB_COLLECTION);

  const doc = await col.findOne({ _id: new ObjectId(id) });

  return doc;
}

export default async function handler(req, res) {
  const data = await getDocument(req.query.id);

  if (!data) {
    res.status(500).json({ error: "Failed to fetch data" });
  }

  res.status(200).json(data);
}
