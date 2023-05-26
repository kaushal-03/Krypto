import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../profiecard.css";
import axios from "axios";
import Graphe from "./Graphe";
const Profiecard = (props) => {
  const [cstate, setclicked] = useState();
  const navigate = useNavigate();
  const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');

const currentDate = `${day}-${month}-${year}`;

  const array = props.ffarray;
  const myArray = [1,2,3,4,5];
  function clicked() {
    setclicked(true);
  }
  function graph() {
    console.log("clecked");
    navigate("/graph");
  }
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    for (const index of array) {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${index}/history?date=${currentDate}`);
        const { data } = response;
        console.log(data);
        //const { market_data: { market_cap: { aed: marketCap } } } = data[index];

        //const { high_24h} = data[index];
        
        //myArray.push(marketCap);
        // Further processing of data
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };
  return (
    <div id="main">
      <div id="out">
        <img
          src="https://th.bing.com/th/id/OIP.AwOdtn7mEmU_1-9ZviV4jwHaHa?w=164&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          id="image"
        />
        <p>Name:{props.name}</p>
        <p>Email:{props.email}</p>
        <div id="coinsf">
          <p>Coins Followed:</p>
          {
           array.map((index) => (
              <button className="button-41" key={index}>
                {index}
              </button>
            ))}
        </div>
      </div>
      <button onClick={graph}>Click to view graph</button>
    </div>
  );
};

export default Profiecard;
