import React from "react";
import NavBarContainer from "../Components/NavBar/NavBarContainer";
import Home from "../Pages/Home/Home";
import "./Layout.css";
import FavSongsWidget from "../Components/FavSongsWidget/FavSongsWidget";

export default function Layout() {
  return (
    <div>
      <NavBarContainer />
      <FavSongsWidget/>
      <Home />
    </div>
  );
}
