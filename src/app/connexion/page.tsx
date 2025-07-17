'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase'

export default function Connexion() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push('/felicitation')
    } catch (err) {
      if (typeof err === 'object' && err !== null && 'code' in err) {
        const code = (err as { code: string }).code
        switch (code) {
          case 'auth/user-not-found':
            setError('Aucun compte trouvé pour cet email.')
            break
          case 'auth/wrong-password':
            setError('Mot de passe incorrect.')
            break
          case 'auth/invalid-email':
            setError('Adresse email invalide.')
            break
          default:
            setError('Une erreur est survenue. Veuillez réessayer.')
        }
      } else {
        setError('Une erreur est survenue.')
      }
    }
  }

  return (
    <main className="flex flex-col items-center min-h-screen p-4 bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-3xl font-bold text-blue-700 mb-2">🔑 Connexion</h1>
      <p className="text-gray-700 mb-6 text-center max-w-md">
        Connectez-vous pour accéder à votre espace personnel et découvrir nos formations.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded shadow hover:shadow-lg transition">

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
          Se connecter
        </button>

        <a href="/inscription" className="text-blue-700 text-sm text-center hover:underline">
          Pas encore inscrit ? Créez un compte
        </a>
      </form>
    </main>
  )
}
