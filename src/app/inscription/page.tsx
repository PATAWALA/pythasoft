'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebase/firebase'
import { doc, setDoc } from 'firebase/firestore'

export default function Inscription() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nom, setNom] = useState('')
  const [tel, setTel] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      // Enregistrer nom et téléphone dans Firestore
      await setDoc(doc(db, 'users', user.uid), {
        nom,
        email,
        tel
      })

      router.push('/felicitation')
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Une erreur est survenue.')
      }
    }
  }

  return (
    <main className="flex flex-col items-center min-h-screen p-4 bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-3xl font-bold text-blue-700 mb-2">📝 Inscription</h1>
      <p className="text-gray-700 mb-6 text-center max-w-md">
        Rejoignez notre communauté et commencez votre apprentissage facilement !
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded shadow hover:shadow-lg transition">

        <div className="relative">
          <input
            type="text"
            placeholder="🧑 Nom complet"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="p-2 pl-8 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
            required
          />
        </div>

        <div className="relative">
          <input
            type="email"
            placeholder="📧 Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 pl-8 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
            required
          />
        </div>

        <div className="relative">
          <input
            type="tel"
            placeholder="📱 Téléphone"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            className="p-2 pl-8 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
            required
          />
        </div>

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="🔑 Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 pl-8 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2 text-gray-500"
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button type="submit" className="bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition">
          S’inscrire
        </button>

        <a href="/connexion" className="text-blue-700 text-sm text-center hover:underline">
          Vous avez déjà un compte ? Se connecter
        </a>
      </form>
    </main>
  )
}
