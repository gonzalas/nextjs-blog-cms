import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("talento");

  const data = await db.collection("articles").find();

  const result = [];
  await data.forEach(({ _id, title, content, picture, date }) => {
    result.push({ id: _id, title, content, picture, date });
  });

  res.status(200).send({ data: result });
}
