// import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Maintext from "./MainText";
import Media from "./Media";

function App() {
  const images = [
    "1.jpg",
    "14.jpg",
    "19.jpg",
    "23.jpg",
    "28.jpg",
    "32.jpg",
    "37.jpg",
    "41.jpg",
    "46.jpg",
    "7.jpg",
    "10.jpg",
    "15.jpg",
    "2.jpg",
    "24.jpg",
    "29.jpg",
    "33.jpg",
    "38.jpg",
    "42.jpg",
    "47.jpg",
    "8.jpg",
    "11.jpg",
    "16.jpg",
    "20.jpg",
    "25.jpg",
    "3.jpg",
    "34.jpg",
    "39.jpg",
    "43.jpg",
    "48.jpg",
    "9.jpg",
    "12.jpg",
    "17.jpg",
    "21.jpg",
    "26.jpg",
    "30.jpg",
    "35.jpg",
    "4.jpg",
    "44.jpg",
    "5.jpg",
    "13.jpg",
    "18.jpg",
    "22.jpg",
    "27.jpg",
    "31.jpg",
    "36.jpg",
    "40.jpg",
    "45.jpg",
    "6.jpg",
  ];
  return (
    <>
      <Navbar />
      <Maintext />
      <Media images={images} />
    </>
  );
}

export default App;
