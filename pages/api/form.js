import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const body = req.body;

  if (!body) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: false });
  }
  const client = await clientPromise;
  const db = client.db("talento");

  await db.collection("articles").insertOne(body);

  res.status(200).json({ data: true });
}
