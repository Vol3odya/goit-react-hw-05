import { useState, useEffect, useRef, Suspense } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom"
import { getMovieDetail } from "../http/http-movies"
import Navigation from "../components/Navigation/Navigation";







export default function MovieDetailsPage() {

    const location = useLocation();
    const backLink = useRef(location.state??"/");

    //const getNavLinkClass = (props) => {
    //    return clsx(css.link, props.isActive && css.active);
    //};

    const { movieId } = useParams();

    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                setError(false);
                const data = await getMovieDetail(movieId);
                setMovie(data.data);
                
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [movieId]);

    return (
        <div>
            <Link to={backLink.current}>Go to back</Link>
            {movie && <div>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.original_title} />
                    <h2>{movie.original_title}</h2>
                    <p>User Score: {movie.vote_average}</p>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                    <h4>Genres</h4>
                    <p>{ movie.genres.map((evt)=>evt.name+"\t")}</p>
                </div>
                <Navigation linkOne={"cast"} nameOne={"Cast"} linkTwo={"reviews"} nameTwo={"Reviews"} />
                <Suspense fallback={<div>LOADING PAGE...</div>}>
                    <Outlet />
                </Suspense>
                
                
            </div>}
            
        </div>
    )
}