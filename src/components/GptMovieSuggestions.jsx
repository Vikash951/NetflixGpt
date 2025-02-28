


import { useSelector } from "react-redux";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);

  if (!gpt || !gpt.movieResults || !gpt.moviesNames) {
    return <p className="text-white">Loading...</p>;
  }

  const { movieResults, moviesNames } = gpt;

  // Extract one movie from each available array element
  const selectedMovies = movieResults
    .map((result) => result.results?.[0]) // Take the first movie from each array
    .filter((movie) => movie); // Remove undefined values if any

  return (
    <div className="text-white z-20 bg-black p-4 opacity-90 mt-10 overflow-x-hidden">
      <h2 className="text-xl font-bold mb-4">GPT Movie Suggestions</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {selectedMovies.map((movie, index) => (
          <div key={movie.id} className="text-center p-2">
            {/* Movie Poster */}
            {movie.backdrop_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title || "Movie Poster"}
                className="w-full h-60 object-cover rounded-lg"
              />
            ) : (
              <div className="w-full h-60 flex items-center justify-center bg-gray-700 rounded-lg">
                <p className="text-gray-400">No Image Available</p>
              </div>
            )}

            {/* Movie Title */}
            <h3 className="text-lg font-semibold mt-2">
              {movie.title || "Unknown Title"}
            </h3>

            {/* Corresponding Name from moviesNames */}
            <p className="text-gray-400">{moviesNames[index] || "No Name Available"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
