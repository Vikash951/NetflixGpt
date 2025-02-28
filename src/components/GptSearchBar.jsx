import {lang} from "../utils/languageConstant"
import {useSelector} from "react-redux";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addGptMovieResults } from "../utils/gptSlice";


const GptSearchBar = () => {

  const dispatch = useDispatch();

  const langKey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  const searchMovieTMDB = async (movieName) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=true&language=en-US&page=1`, API_OPTIONS)
    return await response.json();
    
  }

  const handleGptSearchClick = async () => {
      console.log(searchText.current.value);
      //make an API call to GPT and get movie restults

        const gptQuery = "act as a movie recommendation system and suggest some movies for the query" + searchText.current.value + ". only give me names of 5 movies, comma seperated. like the example results given ahead. example results: gadar, sholey , don , ye jawani hai diwani , golmaal";
      
        const gptResults = await openai.chat.completions.create({
          messages: [{ role: 'user', content: gptQuery }],
          model: 'gpt-3.5-turbo',
        });
      
      
       const gptMovies = gptResults?.choices[0]?.message?.content?.split(","); 
       //console.log(gptMovies);
       const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));

       const TMDBResults = await Promise.all(promiseArray);
       console.log(TMDBResults);
       dispatch(addGptMovieResults({movieNames:gptMovies , movieResults :TMDBResults}))
  }

  return (
    
        <div className="pt-[15%] flex justify-center">
           <form action="" className="w-1/2  grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
                <input ref={searchText} className="p-2 m-2 px-4 bg-white text-gray-900 rounded-lg  col-span-10"  type="text"  placeholder={lang[langKey].gptSearchPlaceholder}/>
                <button onClick={handleGptSearchClick} className="m-2  bg-red-600 text-white rounded-lg col-span-2">{lang[langKey].search}</button>
                
           </form>
        </div>
    
  )
}

export default GptSearchBar