import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  //console.log("Movies Data:", movies);

  if (!movies || movies.length === 0) {
    return <p className="p-4 text-gray-500">No movies available...</p>;
  }

  return (
   movies && ( <div className="p-4  relative z-50">
      <h1 className="text-2xl font-bold mb-4 text-white">{title}</h1>

      <div className=" flex gap-3 overflow-x-scroll  overflow-y-hidden ">
        
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movieDetails={movie} />
          ))}
        
      </div>

      
    </div>)
  );
};

export default MovieList;
