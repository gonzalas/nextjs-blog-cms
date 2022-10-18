import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("talento");
  let data = null;

  const { id } = req.query;

  const regexIdValidation = /[0-9a-fA-F]{24}/;

  if (!regexIdValidation.test(id))
    return res.status(500).send({ ok: false, message: "Invalid ID" });

  try {
    data = await db.collection("articles").findOne({ _id: ObjectId(`${id}`) });
  } catch (e) {
    return res.status(404).send({ ok: false, message: "Note not found" });
  }

  if (data) {
    const { title, content, picture } = data;
    return res.status(200).send({ title, content, picture });
  }
}
