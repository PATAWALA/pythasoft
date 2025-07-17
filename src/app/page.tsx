'use client'

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-4 bg-gradient-to-b from-blue-50 to-white">
      
      {/* Présentation */}
      <section className="text-center max-w-2xl space-y-4 mb-8">
        <h1 className="text-4xl font-bold text-blue-700">🌱 Bienvenue chez Phythasoft</h1>
        <p className="text-lg text-gray-800">
          Formations pratiques et accessibles pour tous, même sans expérience !
        </p>
        <p className="text-gray-600">
          Apprenez à créer des sites, utiliser la bureautique ou faire du design et changez votre avenir.
        </p>
      </section>

      {/* Nos formations */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mb-8">
        <div className="flex flex-col items-center p-6 bg-white rounded shadow hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">💻 Création d’applications</h2>
          <p className="text-gray-700 text-center">Créer des sites et applis, même pour débutants.</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded shadow hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">📄 Suite bureautique</h2>
          <p className="text-gray-700 text-center">Word, Excel, PowerPoint pour réussir vos projets.</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded shadow hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">🎨 Graphisme et design</h2>
          <p className="text-gray-700 text-center">Exprimez votre créativité et créez vos visuels.</p>
        </div>
      </section>

      {/* Boutons d'action */}
      <div className="flex flex-wrap gap-4 mb-6">
        <a href="/inscription" className="bg-blue-700 text-white px-5 py-2 rounded shadow hover:bg-blue-800 transition-colors duration-300 hover:shadow-xl transform hover:-translate-y-1">
          S’inscrire
        </a>
        <a href="/connexion" className="bg-gray-300 text-gray-800 px-5 py-2 rounded shadow hover:bg-gray-400 transition-colors duration-300 hover:shadow-xl transform hover:-translate-y-1">
          Se connecter
        </a>
        <a href="/formation" className="bg-green-600 text-white px-5 py-2 rounded shadow hover:bg-green-700 transition-colors duration-300 hover:shadow-xl transform hover:-translate-y-1">
          En savoir plus
        </a>
      </div>

      {/* Boutons Partager */}
      <div className="flex gap-4 mt-4">
        <a 
          href="https://www.facebook.com/sharer/sharer.php?u=https://phythasoft.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
        >
          Partager sur Facebook
        </a>
        <a 
          href="https://api.whatsapp.com/send?text=Découvrez les formations pratiques chez Phythasoft ! https://phythasoft.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 transition"
        >
          Partager sur WhatsApp
        </a>
      </div>
    </main>
  )
}
