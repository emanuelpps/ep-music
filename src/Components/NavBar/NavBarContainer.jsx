import React from "react";
import HomeWidget from "./HomeWidget";
import SearchBar from "./SearchBar";
import TitleBar from "./TitleBar";
import "../../Layout/Layout.css";

export default function NavBarContainer() {
  return (
      <nav class="NavBarContainer">
          <HomeWidget />
          <TitleBar />
          <SearchBar />
      </nav>
  );
}
