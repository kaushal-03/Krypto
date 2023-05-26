import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./store";
import Profiecard from "./Profiecard";

const Profile = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  const newuser = useSelector((state) => {
    const { email } = state.user;
    console.log(email);
    if (email) {
      localStorage.setItem("email", email);
    }
    console.log(state.user);
    return state.user;
  });
  console.log(newuser);
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      fetchUser(storedEmail);
    }
  }, []);

  const fetchUser = async (email) => {
    try {
      const collectionRef = collection(db, "profile details");
      const q = query(collectionRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        setUser(userData);
      } else {
        console.log("No document found with the specified email!");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };

  return (
    <div>
      {user ? (
        <Profiecard name={user.name} email={user.email} ffarray={user.farray} />
      ) : (
        <p>Loading user...</p>
      )}
    </div>
  );
};

export default Profile;
