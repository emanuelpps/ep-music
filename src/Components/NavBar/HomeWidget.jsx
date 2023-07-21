import React from "react";
import "./HomeWidget.css";
import { SlHome } from "react-icons/sl";

export default function HomeWidget() {
  return (
    <div className="HomeWidget">
      <button>
        <SlHome />
      </button>
    </div>
  );
}
