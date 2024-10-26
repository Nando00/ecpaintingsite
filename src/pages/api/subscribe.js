import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body; // we destruct the data to 'email'

    if (!email || typeof email !== "string") {
      return res.status(400).json({ error: "Invalid email" });
    }

    try {
      // Store email in the database
      const result = await prisma.emailSignup.create({
        data: { email },
      });
      res.status(201).json({ message: "Email added successfully", result });
    } catch (error) {
      if (error.code === "P2002") {
        res.status(409).json({ error: "Email already exists" });
      } else {
        res.status(500).json({ error: "Something went wrong" });
      }
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
