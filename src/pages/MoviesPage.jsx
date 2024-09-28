import SearchBar from "../components/SearchBar/SearchBar"
import { useState, useEffect } from "react"
import { searchMovies } from "../http/http-movies";
import MovieList from "../components/MovieList/MovieList";
import { useLocation, useSearchParams } from "react-router-dom";




export default function MoviesPage() {


    const [searchParams, setSearchParams] = useSearchParams();

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    //const [topic, setTopic] = useState("");
    const topic = searchParams.get("search");

    useEffect(() => {
        
        if (topic === null) {
            return;
        }
        
        async function fetchData() {
            try {
                setLoading(true);
                setError(false);
                const data = await searchMovies(topic);
                setMovies(data.data.results);
                
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [topic]);

   
    return (
        <div>
            <SearchBar />
            {movies.length > 0 && <MovieList movies={movies} />}
        </div>
    )
}