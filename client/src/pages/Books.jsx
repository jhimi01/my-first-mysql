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

  console.log(books);

  return (
    <div>
      <h1>Book Shop</h1>
      <div>
        {books &&
          books?.map((books, index) => (
            <div key={index}>
              {books.cover && <img src={books?.cover} alt="book" />}
              <h3>{books?.title}</h3>
              <p>{books?.desc}</p>
            </div>
          ))}
      </div>
      <button>
        <Link to="/add">Add new book</Link>
      </button>
    </div>
  );
};

export default Books;
