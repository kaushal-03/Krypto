import React, { useEffect, useState } from 'react';
import { db } from '../firebase-config';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from './store';

const Profile = () => {
    const newuser = useSelector((state) => state.user);
    console.log(newuser)
    const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  console.log("the Email is " + newuser.email);
  const userEmail = newuser.email; // Replace with the desired email


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const collectionRef = collection(db, 'profile details');
        const q = query(collectionRef, where('email', '==', userEmail));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          // Assuming there's only one document matching the email
          const userData = querySnapshot.docs[0].data();
          setUser(userData);
        } else {
          console.log('No document found with the specified email!');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <p>{user.Phone}</p>
          {/* Display other user details here */}
        </div>
      ) : (
        <p>Loading user...</p>
      )}
    </div>
  );
};

export default Profile;
