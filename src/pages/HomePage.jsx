import { useState, useEffect } from "react"
import { getRundomMovies } from "../http/http-movies";
import MovieList from "../components/MovieList/MovieList";





export default function HomePage() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                setError(false);
                const data = await getRundomMovies();
                setMovies(data.data.results);
                
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);


    

    return (
        <div>
            <h1>Trending today</h1>
            {movies.length > 0 && <MovieList movies={movies} />}
        </div>
        
    )
}