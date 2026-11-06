import { NextResponse } from "next/server";
import OpenAI from "openai";

// On configure le client pour qu'il pointe vers Groq
const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1", // L'adresse magique de Groq
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "Tu es un expert en architecture logicielle. L'utilisateur va te décrire une idée de SaaS. Tu dois générer une structure de projet simple (les pages principales, les tables de base de données) en français.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "openai/gpt-oss-120b", // Un des meilleurs modèles gratuits de Groq
    });

    const result = completion.choices[0]?.message?.content;

    return NextResponse.json({ result });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erreur lors de la génération" },
      { status: 500 }
    );
  }
}