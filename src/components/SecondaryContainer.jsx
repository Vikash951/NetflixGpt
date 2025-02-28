import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const nowPlayingMovies = useSelector(store => store?.movies?.nowPlayingMovies);
    //console.log(nowPlayingMovies);
    const popularMovies = useSelector(store => store?.movies?.popularMovies);
    //console.log(popularMovies);
    const topRatedMovies = useSelector(store => store?.movies?.topRatedMovies);
    const upcomingMovies = useSelector(store => store?.movies?.upcomingMovies);

    return (
        <div className="bg-black">
            <div className="-mt-48 ">
            <MovieList  title={"Now Playing"} movies={nowPlayingMovies} />
            <MovieList  title={"Popular"} movies={popularMovies} />
            <MovieList  title={"Top Rated Movies"} movies={topRatedMovies} />
            <MovieList title = {"Upcoming"} movies = {upcomingMovies} />
            </div>
           
            
        </div>
    );
};

export default SecondaryContainer;
