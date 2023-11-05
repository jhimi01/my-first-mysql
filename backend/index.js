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


app.get('/', (req, res) =>{
    res.json("hello this is the beckend")
})

app.get("/books", (req, res) =>{
    const q = "SELECT * FROM books"
    db.query(q, (err, data)=>{
        if (err) {
            return res.json(err);
        }
        console.log(data);
        return res.json(data);
    })
})



// app.post("/books", (req, res) => {
//     const q = "INSERT INTO books (`title`, `desc`, `cover`) VALUES (?, ?, ?)";

//     const values = ["title from book", "description from book", "cover from book"];

//     db.query(q, values, (err, data) => {
//         if (err) {
//             return res.json(err);
//         }
//         return res.json(data);
//     });
// });


// request from server
// app.post("/books", (req, res) => {
//     console.log(req.body); // Log the request body
//     const q = "INSERT INTO books (`title`, `desc`, `cover`) VALUES (?, ?, ?)";

//     const values = [req.body.title, req.body.desc, req.body.cover];

//     db.query(q, values, (err, data) => {
//         if (err) {
//             return res.json(err);
//         }
//         return res.json(data);
//     });
// });




app.listen(8800, ()=>{
    console.log("connected to backend!")
})