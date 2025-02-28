import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        gptSearchView: false,
        movieResults:null,
        moviesNames : null,
    },
    reducers:{
        toggleGptSearchView : (state) => {
            state.gptSearchView = !state.gptSearchView;
        },
        addGptMovieResults:(state , action) =>{
            const {movieNames , movieResults} = action.payload;
            state.movieResults = movieResults;
            state.moviesNames = movieNames;
        },
        clearGptMovieResults:(state) => {
            state.movieResults = null;
            state.moviesNames = null;
        }
    }
})

export const {toggleGptSearchView , addGptMovieResults , clearGptMovieResults} = gptSlice.actions;

export default gptSlice.reducer;