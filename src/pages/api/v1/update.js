import clientPromise from "../../../db/connect";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const filter = { _id: new ObjectId(req.body.id) };
  const body = {
    $set: {
      ...req.body.data,
    },
  };

  try {
    const db = client.db(process.env.MONGODB_DB);
    const col = db.collection(process.env.MONGODB_COLLECTION);

    const doc = body;

    const result = await col.updateOne(filter, doc);

    res.status(200).json(result);
  } catch (e) {
    res.status(500).json(e.message);
  }
}
