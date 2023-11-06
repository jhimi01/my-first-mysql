import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Book Shop</h1>
      <div className="cards">
        {books &&
          books?.map((books, index) => (
            <div key={index} className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src="https://static-01.daraz.com.bd/p/5ea7dda179a44fb9f42fc7dddeffa566.jpg"
                    alt="Avatar"
                    style={{ width: "300px", height: "300px" }}
                  />
                </div>
                <div className="flip-card-back">
                  <h1>{books?.title}</h1>
                  <p>price: {books?.price}</p>
                  <p>desctiption: {books?.desc}</p>
                  <button className="button button1" onClick={() => handleDelete(books.id)}>delete</button>
                  <button className="button button3">update</button>
                </div>
              </div>
            </div>
          ))}
      <button className="button button1">
        <Link to="/add">Add new book</Link>
      </button>
      </div>

    </div>
  );
};

export default Books;
