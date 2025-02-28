// import { useEffect, useState } from "react"; 
// import { API_OPTIONS } from "../utils/constant";  
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackGround = ({ movieId }) => {     

    

    // const [trailerVideo , setTrailerVideo] = useState(null);

    const trailerVideo = useMovieTrailer(movieId);


    // const getMovieVideo = async () => {        
    //     const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);        
    //     const json = await data.json();  

    //     const filterData = json.results.filter((video) => video.type === "Trailer");
    //     const trailer = filterData.length ? filterData[0] : json.results[0];
    //     setTrailerVideo(trailer);
    // }     

    // useEffect(() => {         
    //     if (movieId) {
    //         getMovieVideo();     
    //     }    
    // }, []); 

    return (         
        <div className="">             
            <iframe 
                className="z-1 w-full h-full aspect-video"
                src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            >
            </iframe>       
            
        </div>     
    ); 
}  

export default VideoBackGround;

