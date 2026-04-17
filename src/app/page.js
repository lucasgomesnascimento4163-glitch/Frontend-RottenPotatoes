export default function Home() {
  return (
    <main className="bg-yellow-50 min-h-screen">

      <section className="text-center py-16 bg-gradient-to-r from-yellow-200 to-orange-300"
>
        <h1 className="text-4xl font-bold mb-4">
          🍿 Bem-vindo ao RottenPotatoes
        </h1>
        <p className="text-lg mb-6">
          Avalie filmes, séries e animes de forma divertida!
        </p>

        <input
          type="text"
          placeholder="Busque seu entretenimento favorito..."
          className="px-4 py-2 rounded-xl w-80 shadow"
        />
      </section>

      {/* FILMES, SÉRIES E ANIMES */}
      <section className="p-8">
        <h2 className="text-2xl font-semibold mb-6">
          🎬 Em Destaque
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* FILME 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="/R.png"
              alt="Filme 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">O Poderoso Chefão</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                <span className="text-sm text-gray-600">9.2</span>
              </div>
              <p className="text-sm text-gray-600">Filme • Drama • 1972</p>
            </div>
          </div>

          {/* SÉRIE 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="/breaking-bad.png"
              alt="Série 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Breaking Bad</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                <span className="text-sm text-gray-600">9.5</span>
              </div>
              <p className="text-sm text-gray-600">Série • Drama • 2008-2013</p>
            </div>
          </div>

          {/* ANIME 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="/R.jpg"
              alt="Anime 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Attack on Titan</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                <span className="text-sm text-gray-600">9.0</span>
              </div>
              <p className="text-sm text-gray-600">Anime • Ação • 2013-2023</p>
            </div>
          </div>

          {/* FILME 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="/wp9255971.jpg"
              alt="Filme 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Interestelar</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                <span className="text-sm text-gray-600">8.6</span>
              </div>
              <p className="text-sm text-gray-600">Filme • Ficção Científica • 2014</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}