const Loader = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600 border-solid"></div>
      <p className="mt-3 text-blue-600 font-medium">Fetching books for you...</p>
    </div>
  );
};

export default Loader;
