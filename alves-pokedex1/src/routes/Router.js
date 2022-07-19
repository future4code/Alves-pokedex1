import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/homePage/HomePage";
import Pokedex from "../pages/pokedexPage/PokedexPage";
import Details from "../pages/detailsPage/DetailsPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="pokedex" element={<Pokedex/>}/>
        <Route path="details" element={<Details/>}/>
        {/* <Route path="*" element={<ErrorPage/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}