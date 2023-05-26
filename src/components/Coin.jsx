import React from 'react'
import { useState ,useEffect} from 'react';
import axios from 'axios';
import {server} from "../index";
import { Button, Container, HStack, RadioGroup, WrapItem , Radio, Wrap} from '@chakra-ui/react';
import Newcard from "./Newcard"
import Loader from './Loader';
import { db } from '../firebase-config';
import { collection, query, where, getDocs , updateDoc ,arrayUnion} from 'firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';
import "../coin.css";
import { Link } from 'react-router-dom';

const Coin = () => {
  const [cdata, setcdata] = useState([]);
  const [farray,setfarray]=useState([]);
  const [loading, setload] = useState(true);
  const [page,setpage]=useState(1);
  const [currency,setCurrency]=useState("inr");
  const btns = new Array(132).fill(1);
  const newuser = useSelector((state) => {
    const { email } = state.user;
    console.log(email);
    if (email) {
      localStorage.setItem('email', email);
    }
    console.log(state.user);
    return state.user;
  });
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
async function updatefarray(val) {
  try {
    const collectionRef = collection(db, 'profile details');
    const q = query(collectionRef, where('email', '==', localStorage.getItem('email')));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Assuming there's only one document matching the email
      const userDoc = querySnapshot.docs[0];
      await updateDoc(userDoc.ref, {
        farray: arrayUnion(val)
      });
    }
  } catch (error) {
    console.error('Error updating array in the database:', error);
  }
}
useEffect(() => {
  console.log(farray);
}, [farray]);
function rchan(event)
{
  //console.log(event.target.value);
  setCurrency(event.target.value);
  setload(true);
}
const paragraphStyle = {
  margin: 0,
  padding: 0
};
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
        <Link to={`/coin/${i.id}`}>
          <img src={i.image} style={{height:"60px",width:"60px"}}></img>
        <p style={paragraphStyle} >Name:{i.name}</p>
        <p style={paragraphStyle}>year:{i.high_24h}</p>
        <p style={paragraphStyle}>Score:{i.low_24h}</p>
        <p style={paragraphStyle}>Price:{i.current_price}</p>
        <button class="button-15" onClick={() => updatefarray(i.id)}>Follow</button>
       </Link>
        {/*url=i.url rank=i.trust_scorerank*/}
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