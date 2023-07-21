import React from "react";
import HomeWidget from "./HomeWidget";
import SearchBar from "./SearchBar";
import TitleBar from "./TitleBar";

export default function NavBarContainer() {
  return (
    <div>
      <HomeWidget />
      <TitleBar />
      <SearchBar />
    </div>
  );
}
