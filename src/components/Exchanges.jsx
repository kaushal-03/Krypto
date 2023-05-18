import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import Loader from "./Loader";
import Card from "./Card";
import Newcard from "./Newcard";
import "../Exchange.css";
import { Container, HStack, Wrap, WrapItem } from "@chakra-ui/react";
const Exchanges = () => {
  const [edata, setedata] = useState([]);
  const [loading, setload] = useState(true);
  useEffect(() => {
    const getexchanges = async () => {
      const { data } = await axios.get(`${server}/exchanges?per_page=250`);
      setedata(data);
      setload(false);
    };
    getexchanges();
  }, []);
  const boxStyles = {
    backgroundColor: "red",
    color: "white",
    padding: "10px",
  };
  return (
    <div class="root">
      {edata.map((i) => (
        <div class="card">
        <img src={i.image}></img>
        <p>Name:{i.name}</p>
        <p>year:{i.year_established}</p>
        <p>Score:{i.trust_score}</p>
    
      </div>
      ))}
    </div>
  );
};

export  const RCard = (props) => {
  
}

export default Exchanges;
