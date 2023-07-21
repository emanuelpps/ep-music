import React from "react";
import epMusicLogo from "../../Assets/images/ep-music-logo.png";
import "./TitleBar.css";

export default function TitleBar() {
  return (
    <div className="TitleBar">
      <img className="epLogo" src={epMusicLogo} alt="EP music Logo"/>
    </div>
  );
}
