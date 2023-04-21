import clientPromise from "../../../db/connect";

export async function getData() {
  const client = await clientPromise;

  const db = client.db(process.env.MONGODB_DB);
  const col = db.collection(process.env.MONGODB_COLLECTION);

  const cursor = await col.find({}); // return all docs
  const data = await cursor.toArray();
  await cursor.close();

  return data;
}

export default async function handler(req, res) {
  const data = await getData();

  if (!data) {
    res.status(500).json({ error: "Failed to fetch data" });
  }

  res.status(200).json(data);
}
