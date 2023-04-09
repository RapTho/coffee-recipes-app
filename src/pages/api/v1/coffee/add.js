export default function handler(req, res) {
  const body = req.body;

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json(body);
}
