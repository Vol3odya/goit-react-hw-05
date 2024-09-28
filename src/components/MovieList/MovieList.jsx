import css from "./MovieList.module.css"
import { Link, useLocation } from "react-router-dom"

export default function MovieList({ movies }) {
  
  const location = useLocation();

  return (
    <ul>
      {movies.map((itm) => {
                return (
                    <li key={itm.id}>
                        <Link to={`/movies/${itm.id}`} state={location}>{itm.title}</Link>
                    </li>
                )
            }
            )}
      
    </ul>
  )
}

