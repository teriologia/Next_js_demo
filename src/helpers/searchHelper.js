import fetch from 'isomorphic-unfetch';

async function searchMovie(querry) {
    console.log(querry)
    if (querry.length > 3) {
        const rawdata = await fetch(`https://api.themoviedb.org/3/search/company?page=1&query=${querry}&api_key=9eddbb034df8ddb9a642cc1562821f43`)
        const data = await rawdata.json()
        console.log(data)
        return data
    }
    else {
        return  []
    }
}

export default searchMovie