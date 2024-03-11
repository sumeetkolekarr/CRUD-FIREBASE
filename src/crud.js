import React, { useState } from "react";
import { db } from "./firebase";
import "./crud.css";
import {doc, addDoc, collection, updateDoc, deleteDoc, getDocs} from 'firebase/firestore'

const Crud = () => {
  const [email, setEmail] = useState()
  const [name, setName] = useState()
  const [phone, setPhone] = useState()
  return (
    <>
      <div className="form_container">
        <h2>Add / Update Form</h2>
        <div className="box">
          <input type="text" placeholder="Full Name" autoComplete="off" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="box">
          <input type="text" placeholder="Email" autoComplete="off" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="box">
          <input type="text" placeholder="Phone Number" autoComplete="off" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        </div>
        <button>Add</button>
        <button>Update</button>
      </div>
      <div className="database">
        <h2>CRUD DataBase</h2>
        <div className="container">
          <div className="box">
            <h3>Name: Sk</h3>
            <h3>E-Mail: Abc@gmail.com</h3>
            <h3>Phone: 01234</h3>
            <button>Update</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crud;
