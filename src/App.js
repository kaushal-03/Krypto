import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Header from './components/Header';
import Coin from './components/Coin';
import Home from './components/Home';
import Coindetails from './components/Coindetails'
import Exchanges from './components/Exchanges';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from './firebase-config';
import {collection,getDocs} from "@firebase/firestore";
import Compo from './Compo';
import { Reroute } from './Reroute';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import { Container } from '@chakra-ui/react'
function App() {
  return (
    <div >
      <Router>
     
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<><Header/><Home/></>}/>
          <Route path="/coin" element={<Coin />} />
          <Route path="/coin/:id" element={<Coindetails />} />
          <Route path="/exchanges" element={<Exchanges/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
