const MovieCard = ({ movieDetails }) => {
 // console.log(movieDetails); // Debugging log

  if (!movieDetails) {
    return <Shimmer />;
  }

  const { poster_path } = movieDetails;

  return (
    <div>
      <div className="w-44 h-64 ">
        <img className="" src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="poster" />
      </div>
    </div>
  );
};

export default MovieCard;
