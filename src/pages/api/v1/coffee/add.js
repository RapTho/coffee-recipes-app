import connectToDatabase from "../../../../db/connect";

const { client } = await connectToDatabase();

export default function handler(req, res) {
  const body = req.body;

  try {
    const db = client.db(process.env.MONGODB_DB);
    const col = db.collection("coffee");
  } catch (e) {}

  res.status(200).json(body);
}
