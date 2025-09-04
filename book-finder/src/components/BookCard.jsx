const BookCard = ({ book }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150?text=No+Image";

  return (
    <div className="bg-white/70 backdrop-blur-lg shadow-md hover:shadow-xl rounded-2xl p-5 flex flex-col items-center text-center transition transform hover:-translate-y-1">
      <img
        src={coverUrl}
        alt={book.title}
        className="w-32 h-48 object-cover rounded-lg mb-4 shadow-md"
      />
      <h3 className="font-semibold text-lg text-gray-800 line-clamp-2">{book.title}</h3>
      <p className="text-gray-600 text-sm mt-1 italic">
        {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
      </p>
      <p className="text-gray-500 text-xs mt-2">
        {book.first_publish_year ? `📅 ${book.first_publish_year}` : ""}
      </p>
    </div>
  );
};

export default BookCard;
