import { useState, useEffect } from "react"

export const useFetch = (apiPath, queryParam="") => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${queryParam}`

    useEffect(() => {
        async function fetchMovies() {
            const response = await fetch(url);
            const jsonData = await response.json();
            console.log(jsonData);
            setData(jsonData.results);
        }
        fetchMovies();
    }, [url])
  return { data }
}
