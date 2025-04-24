import PhotoAlbum from './components/PhotoAlbum'

function App() {
  return (
    <div className="bg-white min-h-screen">
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center">
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8 text-[#34a853]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
            <h1 className="text-xl font-medium">Photos</h1>
          </div>
          <div className="ml-auto">
            <input 
              type="text" 
              placeholder="Search your photos" 
              className="bg-gray-100 rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </header>
      
      <main className="max-w-6xl mx-auto px-4 py-6">
        <PhotoAlbum />
      </main>
    </div>
  )
}

export default App
