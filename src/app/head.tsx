export default function Head() {
  return (
    <>
      <title>Phythasoft - Formations pratiques et accessibles pour tous</title>
      <meta
        name="description"
        content="Inscrivez-vous dès maintenant aux formations Phythasoft : développement web, mobile, bureautique et design graphique, même sans expérience."
      />

      {/* Open Graph pour Facebook, WhatsApp, LinkedIn */}
      <meta property="og:title" content="🌱 Rejoignez Phythasoft et changez votre avenir !" />
      <meta
        property="og:description"
        content="Formations pratiques en création de sites, bureautique et design, accessibles même aux débutants. Inscrivez-vous gratuitement !"
      />
      <meta property="og:image" content="https://pythasoft.vercel.app/canva_m.png" />
      <meta property="og:url" content="https://pythasoft.vercel.app" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="🌱 Rejoignez Phythasoft et changez votre avenir !" />
      <meta
        name="twitter:description"
        content="Formations pratiques en création de sites, bureautique et design, accessibles même aux débutants. Inscrivez-vous gratuitement !"
      />
      <meta name="twitter:image" content="https://pythasoft.vercel.app/canva_m.png" />
    </>
  );
}
