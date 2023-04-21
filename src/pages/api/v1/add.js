import clientPromise from "../../../db/connect";

export default async function handler(req, res) {
  const client = await clientPromise;
  const body = req.body;

  try {
    const db = client.db(process.env.MONGODB_DB);
    const col = db.collection(process.env.MONGODB_COLLECTION);

    const doc = body;

    const result = await col.insertOne(doc);

    res.status(200).json(result);
  } catch (e) {
    res.status(500).json(e.message);
  }
}
