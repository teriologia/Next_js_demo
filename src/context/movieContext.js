import React, { useState, useEffect} from 'react'
import fetch from 'isomorphic-unfetch';

export const MovieContext = React.createContext([])



const MovieData = props => {
    const [data, setData] = useState([]);
    const [genre, setGenre] = useState([]);
    const [id, setId] = useState([])
    const [movieDetail, setMovieDetail] = useState([])
    const [text, setText] = useState('');
    useEffect(() => {
        async function getData() {
            const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=9eddbb034df8ddb9a642cc1562821f43')
            const resJson = await res.json()
            setData(resJson)
        }
        async function getGenre() {
            const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=9eddbb034df8ddb9a642cc1562821f43')
            const resJson = await res.json()
            setGenre(resJson)
        }
        getData()
        getGenre()
    }, [])

    useEffect(() => {
        async function getMovie(id) {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9eddbb034df8ddb9a642cc1562821f43`)
            const resJson = await res.json()
            setMovieDetail(resJson)
        }
        getMovie(id)
    }, [id])

    return(
        <MovieContext.Provider value={{ data, genre, setText, text, id, setId, movieDetail}}>
            {props.children}
        </MovieContext.Provider>
    )
} 

export default MovieData
