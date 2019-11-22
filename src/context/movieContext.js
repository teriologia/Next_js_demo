import React, { useState, useEffect} from 'react'
import fetch from 'isomorphic-unfetch';

export const MovieContext = React.createContext([])



const MovieData = props => {
    const [data, setData] = useState([]);
    const [genre, setGenre] = useState([]);
    useEffect(() => {
        async function getData() {
            const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=9eddbb034df8ddb9a642cc1562821f43')
            const resJson = await res.json()
            console.log(resJson)
            setData(resJson)
        }
        async function getGenre() {
            const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=9eddbb034df8ddb9a642cc1562821f43')
            const resJson = await res.json()
            console.log(resJson)
            setGenre(resJson)
        }
        getData()
        getGenre()
    }, [])

    return(
        <MovieContext.Provider value={{data, genre}}>
            {props.children}
        </MovieContext.Provider>
    )
} 

export default MovieData
