"use client";

import { useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export default function GenererPage() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerer = async () => {
    if (!prompt.trim()) {
      alert("Veuillez décrire votre idée !");
      return;
    }

    setIsLoading(true);
    setResult(""); // On vide le résultat précédent

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      
      if (data.error) {
        setResult("Erreur : " + data.error);
      } else {
        setResult(data.result);
      }
    } catch (error) {
      setResult("Une erreur est survenue lors de la connexion à l'IA.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-8">
      <div className="w-full max-w-2xl">
        
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Créer un nouveau projet</h1>
          <p className="text-gray-600">Décrivez votre idée, notre IA s'occupe du reste.</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
            Votre idée de SaaS
          </label>
          
          <textarea
            id="prompt"
            rows={5}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Ex: Je veux créer une plateforme de réservation pour les coiffeurs..."
          />

          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={handleGenerer}
              disabled={isLoading}
              className="rounded-lg bg-blue-600 px-6 py-2.5 text-white font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isLoading ? "Génération en cours..." : "Générer mon projet"}
            </button>
          </div>
        </div>

        {/* Zone d'affichage du résultat de l'IA */}
        {result && (
          <div className="mt-8 rounded-xl bg-white p-6 shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Résultat de l'IA</h2>
            <div className="text-gray-700 bg-gray-50 p-4 rounded-lg overflow-auto max-h-[500px]">
              <ReactMarkdown>{result}</ReactMarkdown>
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-900 underline">
            &larr; Retour à l'accueil
          </Link>
        </div>

      </div>
    </main>
  );
}