import express from "express";
import mysql from "mysql";
import cors from "cors";
// import bodyParser from "body-parser"; // Import body-parser

const app = express();


// Use body-parser middleware to parse request bodies
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: '1234',
    database: 'test'
})


// if there is any problem with the authentication
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';


app.get('/', (req, res) =>{
    res.json("hello this is the beckend")
})


// get request
app.get("/books", (req, res) =>{
    const q = "SELECT * FROM books"
    db.query(q, (err, data)=>{
        // if (err) {
        //     return res.json(err);
        // }
        // console.log(data);
        return res.json(data);
    })
})



// post request 
app.post("/books", (req, res) => {
    console.log(req.body); // Log the request body
    const q = "INSERT INTO books (`title`, `desc`, `price`, `cover`) VALUES (?, ?, ?, ?)";

    const values = [req.body.title, req.body.desc, req.body.price, req.body.cover];

    console.log(values)

    db.query(q, values, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    });
});


// delete books from the database
app.delete('/books/:id', (req, res) => {
console.log(req.params.id);
const bookId = req.params.id;
const q = "DELETE FROM books WHERE id = ?"

db.query(q, [bookId], (err, data) => {
    if (err) {
        return res.json(err);
    }
    return res.json("book has been deleted");
});
})




app.listen(8800, ()=>{
    console.log("connected to backend!")
})