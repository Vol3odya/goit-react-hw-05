import {lazy, Suspense} from "react"
import Navigation from "../Navigation/Navigation"
import { Routes, Route } from "react-router-dom"
{/*import HomePage from "../../pages/HomePage"
import MoviesPage from "../../pages/MoviesPage"
import NotFoundPage from "../../pages/NotFoundPage"
import MovieDetailsPage from "../../pages/MovieDetailsPage"
import MovieReviews from "../MovieReviews/MovieReviews"
import MovieCast from "../MovieCast/MovieCast"*/}

import css from "./App.module.css"

const HomePage = lazy(() => import("../../pages/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));

export default function App() {


  return (
    <>
      <Navigation linkOne={"/"} nameOne={"Home"} linkTwo={"/movies"} nameTwo={"Movies"} />
      <Suspense fallback={<div>LOADING PAGE...</div>}>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} >
            <Route path="cast" element={<MovieCast/>} />
            <Route path="reviews" element={<MovieReviews/>} />
          </Route>
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </Suspense>
      
    </>
  )
}
