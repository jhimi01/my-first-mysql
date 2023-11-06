import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    price: "",
    cover: "",
  });

  const navigate = useNavigate();

  const handleChange = (e)=>{
  setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))
  }
  

  const handleClick =async(e)=>{
    e.preventDefault()
    try{
     await axios.post('http://localhost:8800/books', formData)
     navigate('/')
    }catch(err){
  console.log(err)
    }
    console.log(formData)
  }



  return (
    <>
      <div style={{display: 'flex', alignItems:'center', justifyContent:"center"}}>
    <div>
        <h2 style={{textAlign:"center"}}>Add books here</h2>
    <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
            placeholder="title"
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "16px",
              marginTop: "10px",
            }}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="desc"
            onChange={handleChange}
            placeholder="description"
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "16px",
              marginTop: "10px",
            }}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            onChange={handleChange}
            placeholder="title"
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "16px",
              marginTop: "10px",
            }}
          />
        </div>
        <div>
          <label htmlFor="cover">Cover URL:</label>
          <input
            type="text"
            id="cover"
            name="cover"
            onChange={handleChange}
            placeholder="title"
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "16px",
              marginTop: "10px",
            }}
          />
        </div>
        <button
         onClick={handleClick}
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Add Book
        </button>
      <button>
        <Link to="/">Add new book</Link>
      </button>
    </div>
      </div>
    </>
  );
};

export default Add;
