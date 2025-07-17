'use client'
import React from 'react'

export default function AvantagesFormation() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 p-8 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold mb-8 text-green-700 drop-shadow-md">
        🚀 Pourquoi se former chez <span className="text-blue-600">Phythasoft</span> ? 🎓
      </h1>

      <section className="max-w-4xl bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold mb-4 text-blue-600 flex items-center gap-3">
          📱 Créez vos propres applications mobiles
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Avec Phythasoft, vous apprendrez toutes les compétences nécessaires pour développer des applications mobiles modernes et performantes. Que vous soyez débutant ou déjà initié, notre formation vous guide pas à pas pour concrétiser vos idées en projets réels.
        </p>
      </section>

      <section className="max-w-4xl bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold mb-4 text-green-700 flex items-center gap-3">
          💡 Accompagnement personnalisé
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Notre équipe d’experts passionnés est là pour vous soutenir tout au long de votre parcours. Vous bénéficierez de conseils adaptés, d’ateliers pratiques, et d’un suivi personnalisé pour maximiser votre réussite.
        </p>
      </section>

      <section className="max-w-4xl bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold mb-4 text-purple-600 flex items-center gap-3">
          🌟 Accès à un réseau professionnel
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          En rejoignant Phythasoft, vous intégrez une communauté dynamique de développeurs, formateurs, et entrepreneurs. Profitez d’opportunités exclusives, d’événements de networking, et d’un réseau solide pour booster votre carrière.
        </p>
      </section>

      <section className="max-w-4xl bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-red-600 flex items-center gap-3">
          🎯 Formations pratiques et certifiées
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Nos formations sont axées sur la pratique avec des projets concrets à réaliser. À la fin, obtenez une certification reconnue qui valorise vos compétences auprès des employeurs et clients.
        </p>
      </section>

      <a
        href="/inscription"
        className="mt-12 bg-green-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-green-700 transition-colors duration-300 shadow-lg"
      >
        🔥 Je veux m’inscrire maintenant !
      </a>
    </main>
  )
}
