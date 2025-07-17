'use client'
import React, { useEffect, useState } from 'react'

export default function Felicitations() {
  const [bubbles, setBubbles] = useState<React.CSSProperties[]>([])

  useEffect(() => {
    const newBubbles = [...Array(15)].map(() => ({
      width: `${20 + Math.random() * 40}px`,
      height: `${20 + Math.random() * 40}px`,
      left: `${Math.random() * 100}%`,
      animationDuration: `${10 + Math.random() * 10}s`,
      animationDelay: `${Math.random() * 10}s`,
    }))
    setBubbles(newBubbles)
  }, [])

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-green-100 via-blue-50 to-green-100 overflow-hidden">
      {/* Bulles animées en fond */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        {bubbles.map((style, i) => (
          <span
            key={i}
            className="bubble absolute rounded-full bg-green-400 opacity-30 animate-rise"
            style={style}
          />
        ))}
      </div>

      <h1 className="text-4xl font-bold text-green-700 mb-4 z-10">🎉 Bravo et bienvenue chez Phythasoft !</h1>

      <p className="text-center text-gray-800 mb-4 max-w-xl z-10">
        Vous avez franchi la première étape pour changer votre vie.
      </p>

      <p className="text-center text-blue-700 font-semibold mb-6 max-w-2xl z-10">
        Venez vite à notre agence pour démarrer vos formations pratiques et transformer votre avenir : <br />
        <strong>Ouaké, Wèkètè, 15 mètres après la maison de l’ancienne ministre, en allant à Sèmèrè.</strong>
      </p>

      <p className="text-center text-gray-700 max-w-xl mb-8 z-10">
        Toute l’équipe Phythasoft est impatiente de vous rencontrer et de vous accompagner pas à pas vers le succès !
      </p>

      <a href="/avantage" className="z-10 bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700 transition-colors duration-300">
        Pourquoi Phythasoft ?
      </a>

      <style jsx>{`
        .bubble {
          bottom: -60px;
          will-change: transform, opacity;
        }
        @keyframes rise {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-120vh) scale(1.5);
            opacity: 0;
          }
        }
        .animate-rise {
          animation-name: rise;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </main>
  )
}
