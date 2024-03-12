import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import "./crud.css";
import {
  doc,
  addDoc,
  collection,
  updateDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";

const Crud = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [fetchData, setFetchData] = useState([]);
  const [id, setId] = useState();

  // Adding the Data in DB
  const dbRef = collection(db, "CRUD");
  const add = async () => {
    const addData = await addDoc(dbRef, {
      Name: name,
      Email: email,
      Phone: phone,
    });
    if (addData) {
      alert("Data Added Successfully");
      window.location.reload();
    } else {
      alert("Error Adding Data");
    }
  };

  // Fetching the Data from DB
  const fetch = async () => {
    const snapshot = await getDocs(dbRef);
    const fetchdata = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setFetchData(fetchdata);
  };

  useEffect(() => {
    fetch();
  }, []);

  // Pass Update Data to Form
  const passData = async (id) => {
    const matchId = fetchData.find((data) => {
      return (data.id = id);
    });
    setName(matchId.Name);
    setEmail(matchId.Email);
    setPhone(matchId.Phone);
    setId(matchId.id);
  };

  // Update the data
  const update = async () => {
    const updateRef = doc(dbRef, id);
    try {
      const updateData = await updateDoc(updateRef, {
        Name: name,
        Email: email,
        Phone: phone,
      });
      alert("Update Successful");
      window.location.reload();
    } catch (error) {
      alert(error, "Error in Updating");
    }
  };

  // Delete the Data from DB
  const del = async (id) => {
    const delRef = doc(dbRef, id);
    try {
      await deleteDoc(delRef);
      alert("Deleted Successfully!");
      window.location.reload();
    } catch (error) {
      alert("Error Deleting Document");
    }
  };
  return (
    <>
      <div className="form_container">
        <h2>Add / Update Form</h2>
        <div className="box">
          <input
            type="text"
            placeholder="Full Name"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="box">
          <input
            type="text"
            placeholder="Email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="box">
          <input
            type="text"
            placeholder="Phone Number"
            autoComplete="off"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button onClick={add}>Add</button>
        <button onClick={update}>Update</button>
      </div>
      <div className="database">
        <h2>CRUD DataBase</h2>
        <div className="container">
          {fetchData.map((data) => {
            return (
              <>
                <div className="box">
                  <h3>Name: {data.Name}</h3>
                  <h3>E-Mail: {data.Email}</h3>
                  <h3>Phone: {data.Phone}</h3>
                  <button onClick={() => passData(data.id)}>Update</button>
                  <button onClick={()=>del(data.id)}>Delete</button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Crud;
