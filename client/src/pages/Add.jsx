import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Add = () => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    price: "",
    cover: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can submit the form data to your backend (using Axios or any other method)
    // For example:
    axios.post("http://localhost:8800/books", formData)
      .then((response) => {
        console.log(response.data);
        setFormData({
            title: "",
            description: "",
            price: "",
            cover: ""
          });
      })
      .catch((error) => {
        console.error(error);
      });

    // Reset the form after submission if needed
  
    console.log(formData)
  };


  return (

    <>  
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", fontSize: "16px", marginTop: "10px"  }}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", fontSize: "16px" , marginTop: "10px" }}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", fontSize: "16px", marginTop: "10px"  }}
        />
      </div>
      <div>
        <label htmlFor="cover">Cover URL:</label>
        <input
          type="text"
          id="cover"
          name="cover"
          value={formData.cover}
          style={{ width: "100%", padding: "8px", fontSize: "16px", marginTop: "10px" }}
          onChange={handleChange}
        />
      </div>
      <button type="submit"  style={{
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px",
        }}>Add Book</button>
    </form>
    <button>
      <Link to ='/'>Add new book</Link>
    </button>
    </>
  );
};

export default Add;
