import React from "react";
import { db } from "./firebase";

const Crud = () => {
  return (
    <>
      <div className="form_container">
        <h2>Add / Update Form</h2>
        <div className="box">
          <input type="text" placeholder="Full Name" autoComplete="off"/>
        </div>
        <div className="box">
          <input type="text" placeholder="Email" autoComplete="off"/>
        </div>
        <div className="box">
          <input type="text" placeholder="Phone Number" autoComplete="off"/>
        </div>
        <button>Add</button>
        <button>Update</button>
      </div>
    </>
  );
};

export default Crud;
