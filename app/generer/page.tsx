"use client"; // Obligatoire pour utiliser useState (l'interactivité)

import { useState } from "react";
import Link from "next/link";

export default function GenererPage() {
  // On crée une variable "prompt" pour stocker le texte, et "setPrompt" pour le modifier
  const [prompt, setPrompt] = useState("");

  // La fonction qui se lance quand on clique sur le bouton
  const handleGenerer = () => {
    if (!prompt.trim()) {
      alert("Veuillez décrire votre idée avant de générer !");
      return;
    }
    // Pour l'instant, on affiche juste une alerte avec le texte
    alert(`Génération en cours pour : "${prompt}"\n\n(L'IA sera connectée à l'étape suivante !)`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-8">
      <div className="w-full max-w-2xl">
        
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Créer un nouveau projet</h1>
          <p className="text-gray-600">Décrivez votre idée en quelques mots, notre IA s'occupe du reste.</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
            Votre idée de SaaS
          </label>
          
          <textarea
            id="prompt"
            rows={5}
            value={prompt} // On lie la zone de texte à notre variable
            onChange={(e) => setPrompt(e.target.value)} // On met à jour la variable à chaque frappe
            className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Ex: Je veux créer une plateforme de réservation pour les coiffeurs..."
          />

          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={handleGenerer} // On déclenche la fonction au clic
              className="rounded-lg bg-blue-600 px-6 py-2.5 text-white font-medium hover:bg-blue-700 transition-colors"
            >
              Générer mon projet
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-900 underline">
            &larr; Retour à l'accueil
          </Link>
        </div>

      </div>
    </main>
  );
}