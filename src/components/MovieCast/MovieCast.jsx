import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import {castMovie} from "../../http/http-movies"
import css from "./MovieCast.module.css"

export default function MovieCast() {
  const location = useLocation();
  const id = parseInt(location.pathname.substr(8, 14));
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  
  useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                setError(false);
                const data = await castMovie(id);
                setCast(data.data.cast);
                
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

  return (
    <ul>
      {
        cast.map((itm) => {
          return (
            <li key={itm.cast_id}>
              <img src={`https://image.tmdb.org/t/p/w500${itm.profile_path}`} alt={itm.name} />
              <p>{itm.name}</p>
              <p>Character: {itm.character}</p>
            </li>
            
          )
        })}
    </ul>
  )
}
