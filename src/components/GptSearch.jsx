import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"
import { BG_URL } from "../utils/constant"

const GptSearch = () => {
  return (
    <div className="">
         <div className="absolute -z-10">
                <img className="" 
                     src= {BG_URL}
                     alt="Netflix Background" />
         </div>
        
            <GptSearchBar />
            <GptMovieSuggestions />
        
      
    </div>
  )
}

export default GptSearch




