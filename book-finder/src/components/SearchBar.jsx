const SearchBar = ({ query, setQuery, onSearch }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 mt-10 justify-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="🔍 Search for a book..."
        className="flex-grow sm:w-96 border border-gray-300 rounded-xl px-5 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400"
      />
      <button
        onClick={onSearch}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-black text-xl font-mono px-6 py-3 rounded-xl font-medium shadow-md hover:shadow-lg hover:scale-105 transition transform duration-200"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
