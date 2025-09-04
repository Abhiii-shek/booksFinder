import { useState } from "react";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const Home = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Please enter a book title");
      return;
    }
    setLoading(true);
    setError("");
    setBooks([]);
    try {
      const res = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`);
      if (!res.ok) throw new Error("Failed to fetch books");
      const data = await res.json();
      if (data.docs.length === 0) {
        setError("No books found. Try another title!");
      } else {
        setBooks(data.docs.slice(0, 24)); // show 24 results
      }
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {books.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
