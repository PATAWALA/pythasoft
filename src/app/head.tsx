// app/head.tsx
export default function Head() {
  return (
    <>
      <title>Phythasoft - Formations pratiques et accessibles pour tous</title>
      <meta name="description" content="Inscrivez-vous dès maintenant aux formations Phythasoft : développement web, mobile, bureautique et design graphique, même sans expérience." />

      {/* Open Graph pour Facebook */}
      <meta property="og:title" content="🌱 Rejoignez Phythasoft et changez votre avenir !" />
      <meta property="og:description" content="Formations pratiques en création de sites, bureautique et design, accessibles même aux débutants. Inscrivez-vous gratuitement !" />
      <meta property="og:image" content="https://phythasoft.vercel.app/dev.png" />
      <meta property="og:url" content="https://phythasoft.vercel.app" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}
