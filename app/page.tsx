import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-24 text-center">
      {/* Logo / Titre */}
      <div className="mb-8">
        <h1 className="text-6xl font-extrabold tracking-tight text-gray-900">
          SaaS<span className="text-blue-600">Forge</span>
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl">
          Transformez une simple idée en base de SaaS prête à développer. 
          Générez l'architecture, le code, la base de données et la documentation en quelques secondes.
        </p>
      </div>

      {/* Boutons d'action */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Link
          href="/generer"
          className="rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-blue-700"
        >
          Créer un projet
        </Link>
        <a
          href="https://github.com/ItsJustutur/SaaSForge"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border-2 border-gray-300 bg-white px-8 py-3 text-lg font-semibold text-gray-700 transition hover:bg-gray-100"
        >
          Voir sur GitHub
        </a>
      </div>

      {/* Badge de statut */}
      <div className="mt-16 inline-flex items-center rounded-full border border-yellow-300 bg-yellow-50 px-4 py-1.5 text-sm font-medium text-yellow-800">
        🚧 En cours de développement (V1)
      </div>
    </main>
  );
}