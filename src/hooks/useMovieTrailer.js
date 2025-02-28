import { useEffect, useState } from "react"; 
import { API_OPTIONS } from "../utils/constant";  

const useMovieTrailer = (movieId) => {
    const [trailerVideo, setTrailerVideo] = useState(null);


    const getMovieVideo = async () => {        
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);        
        const json = await response.json();  

        if (json.results && json.results.length > 0) {
            const filterData = json.results.filter((video) => video.type === "Trailer");
            const trailer = filterData.length > 0 ? filterData[0] : json.results[0];

            setTrailerVideo(trailer);
        } 
    };  

    useEffect(() => {
        if (movieId) {
            getMovieVideo();
        }
    }, [movieId]);  



    return trailerVideo;
};

export default useMovieTrailer;
