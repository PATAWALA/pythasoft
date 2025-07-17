export default function Formations() {
  return (
    <main className="flex flex-col items-center min-h-screen p-4 bg-gray-50">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">📚 Nos formations et contact</h1>
      
      <section className="max-w-3xl text-center space-y-4 mb-8">
        <p className="text-gray-800">
          Chez Phythasoft, nous vous formons même si vous partez de zéro. Découvrez nos programmes pratiques :
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mb-8">
        <div className="p-6 bg-white rounded shadow hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">💻 Création d&apos;applications et sites web</h2>
          <p className="text-gray-700">Créez vos propres sites et applications, même sans expérience.</p>
        </div>
        <div className="p-6 bg-white rounded shadow hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">📄 Suite bureautique</h2>
          <p className="text-gray-700">Devenez à l’aise avec Word, Excel, PowerPoint, pour travailler et réussir vos projets.</p>
        </div>
        <div className="p-6 bg-white rounded shadow hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">🎨 Graphisme et design</h2>
          <p className="text-gray-700">Exprimez votre créativité en créant des affiches, logos et contenus visuels.</p>
        </div>
      </section>

      <section className="max-w-3xl text-center space-y-4 mb-8">
        <h2 className="text-2xl font-bold text-blue-700">📍 Où nous trouver ?</h2>
        <p className="text-gray-700">
          Venez vous inscrire directement à notre agence : <br />
          <strong>Ouaké, Wèkètè, 15 mètres après la maison de l’ancienne ministre, en allant à Sèmèrè.</strong>
        </p>
      </section>

      <p className="text-center text-blue-700 font-semibold mb-6">
        Ne ratez pas l’occasion de changer votre avenir avec Phythasoft !
      </p>

      <a 
        href="/inscription"
        className="bg-green-600 text-white px-5 py-2 rounded shadow hover:bg-green-700 transition-colors duration-300 flex items-center gap-2"
      >
        😊 Je m&apos;inscris maintenant
      </a>
    </main>
  )
}
