import fetch from 'isomorphic-unfetch';

async function searchGenre(genre) {
    const rawdata = await fetch(`https://api.themoviedb.org/3/discover/movie?page=1&api_key=9eddbb034df8ddb9a642cc1562821f43&with_genres=${genre}&sort_by=popularity.desc`)
    const data = await rawdata.json()
    return data
}

export default searchGenre