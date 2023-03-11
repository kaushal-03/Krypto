import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { db } from "./firebase-config";
import { collection, getDocs } from "@firebase/firestore";
import { Container } from "@chakra-ui/react";
const Compo = () => {
  const [userse, setUsers] = useState([]);
  const collectionreference = collection(db, "users");
  
  useEffect(() => {
    const getdata = async () => {
      const data = await getDocs(collectionreference);
      setUsers(data.docs.map((doc) => ({ ...doc.data(),id:doc.id})));
    };
    getdata();
  }, []);

  return (
    <div>
      {userse.map((user) => (
        <div>
        <h1>{user.Name}</h1>
        <h1>{user.Email}</h1>
        </div>
      ))}
    </div>
  );
};

export default Compo;
