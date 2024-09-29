import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom"
import {reviewMovie} from "../../http/http-movies"
import css from "./MovieReviews.module.css"

export default function MovieReviews() {
 const location = useLocation();
  const { movieId } = useParams();
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
      async function fetchData() {
            try {
                setLoading(true);
                setError(false);
              const data = await reviewMovie(movieId);
                setReview(data.data.results);
                
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [movieId]);

  return (
    <ul>
      {review.length>0?
        review.map((itm) => {
          return (
            <li key={itm.id}>
              <h3>{itm.author}</h3>
              <p>{itm.content}</p>
            </li>
            
          )
        }) :
        <p>No reviews.</p>}
    </ul>
  )
}
