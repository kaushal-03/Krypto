import React from 'react'
import { useState ,useEffect} from 'react';
import axios from 'axios';
import {server} from "../index";
import { Button, Container, HStack, RadioGroup, WrapItem , Radio, Wrap} from '@chakra-ui/react';
import Newcard from "./Newcard"
import Loader from './Loader';
import "../coin.css";


const Coin = () => {
  const [cdata, setcdata] = useState([]);
  const [loading, setload] = useState(true);
  const [page,setpage]=useState(1);
  const [currency,setCurrency]=useState("inr");
  const btns = new Array(132).fill(1);
  useEffect(() => {
    const getexchanges = async () => {
      const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
      console.log(cdata);
      setcdata(data);
      setload(false);
    };
    getexchanges();
  },[currency,page]);

function pchan(event)
{
  console.log(event.target.value);
  setpage(event.target.value);
  setload(true);
}
function rchan(event)
{
  //console.log(event.target.value);
  setCurrency(event.target.value);
  setload(true);
}
 return (
<div class = "main">
    <div class="rr">
       <RadioGroup onChange={setCurrency} value={currency}>
        <HStack>
          <Radio value={"inr"}>₹</Radio>
          <Radio value={"usd"}>$</Radio>
          <Radio value={"eur"}>€</Radio>
        </HStack>
      </RadioGroup>
      </div>
      <div class="root">
      
      {cdata.map((i) => (
        <div class="card">
        <img src={i.image} style={{height:"60px",width:"60px"}}></img>
        <p>Name:{i.name}</p>
        <p>year:{i.high_24h}</p>
        <p>Score:{i.low_24h}</p>
        <button class="button-15" onClick={() => console.log(i.id)}>Follow</button>
    
      </div>
      ))}
    </div>
      <div>
      <HStack w={"full"} overflowX={"auto"} p={"8"}>
        {btns.map((item,index) => (
        <Button onClick={pchan} value={index+1}>{index+1}</Button>
        ))}
      </HStack>
    </div>
  </div>
  )
}

export default Coin