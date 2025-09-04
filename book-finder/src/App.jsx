import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-5 text-center shadow-lg">
        <h1 className="text-3xl text-gray-900 font-extrabold tracking-wide">📚 Book Finder</h1>
        <p className="mt-1 text-sm text-blue-500">Discover books instantly from Open Library</p>
      </header>
      <Home />
    </div>
  );
}

export default App;
