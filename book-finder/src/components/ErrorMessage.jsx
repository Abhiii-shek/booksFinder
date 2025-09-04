const ErrorMessage = ({ message }) => {
  return (
    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-center mt-6 shadow-sm">
      ⚠️ {message}
    </div>
  );
};

export default ErrorMessage;
