import React from 'react';
import "./Home.css";
import { useEffect } from 'react';
import myVideo from './Cover.mp4';
import Carousele from './Carousele';
import image from "./LAND.jpg"
const Home = () => {
  
  return (
    <div id="main-div">
       <div id = "second">
       <img src={image}/>
      </div>
       <div id="first">
      </div>
     
      <div id="footer">

      </div>
    </div>
  )
}

export default Home