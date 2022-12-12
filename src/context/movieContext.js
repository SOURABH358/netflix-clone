import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
const INITIAL_STATE = {
    actionMovies:[]
} 
function reducer(state, action){
    if(action.type==='SET__ACTION__MOVIES'){
        return {
            ...state,
            actionMovies: action.payload
        }
    }
}
const MoviesContext = createContext();

const MovieContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
    useEffect(()=>{
        
    },[])
    return <MoviesContext.Provider value={{...state, dispatch}}>
        {children}
    </MoviesContext.Provider>
}

export {MovieContextProvider,MoviesContext}

/**
{id: 28, name: 'Action'}
{id: 12, name: 'Adventure'}
{id: 16, name: 'Animation'}
{id: 35, name: 'Comedy'}
{id: 80, name: 'Crime'}
{id: 99, name: 'Documentary'}
{id: 18, name: 'Drama'}
{id: 10751, name: 'Family'}
{id: 14, name: 'Fantasy'}
{id: 36, name: 'History'}
{id: 27, name: 'Horror'}
{id: 10402, name: 'Music'}
{id: 9648, name: 'Mystery'}
{id: 10749, name: 'Romance'}
{id: 878, name: 'Science Fiction'}
{id: 10770, name: 'TV Movie'}
{id: 53, name: 'Thriller'}
{id: 10752, name: 'War'}
{id: 37, name: 'Western'
 */