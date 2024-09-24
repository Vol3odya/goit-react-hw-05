import Navigation from "../Navigation/Navigation"
import { Routes, Route } from "react-router-dom"
import HomePage from "../../pages/HomePage"
import MoviesPage from "../../pages/MoviesPage"
import NotFoundPage from "../../pages/NotFoundPage"

import css from "./App.module.css"

export default function App() {


  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/movies" element={<MoviesPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </>
  )
}
