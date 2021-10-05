const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Abc@12345',
    database: 'book_container',
    port:3306
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const sqlGET = "SELECT * FROM book";
    connection.query(sqlGET, (err, result) =>
    {
        if (err) console.log(err);
        res.send(result);
    });
});

app.post('/api/insert', (req, res) => {
    const title = req.body.Title;
    const image = req.body.image;
    const author = req.body.Author;
    const descript = req.body.Descrip;
    const content = req.body.Content;
    const sqlInsert = "INSERT INTO book (Title,image,Author,Descrip,Content) VALUES (?,?,?,?,?)";
    connection.query(sqlInsert, [title, image, author, descript, content], (err, result) => {
        console.log(result);
    });
})

app.listen(3001, () => console.log('App listening on port 3001'));