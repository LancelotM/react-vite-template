import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config({ path: ".env.development.local" });

const app = express();
app.use(cors());
app.use(express.json());

console.log('http_proxy',process.env.http_proxy);
console.log('OPENAI_API_KEY',process.env.OPENAI_API_KEY);

const client = new OpenAI({
  baseURL:"https://api.cloudflare.com/client/v4/accounts/7d15c5368345d8af23216281a15f23a1/ai/v1",
  apiKey: process.env.CLOUDFLAREAI_API_KEY,
});

app.post("/api/chat", async (req, res) => {
  try {
    console.log('/api/chat-req.body',req.body);

    const response = await client.chat.completions.create(req.body)

    console.log('/api/chat-response',response);
    res.json(response);
    } catch (err) {
      res.status(500).json({ error: "OpenAI request failed" });
    }
});

app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});
