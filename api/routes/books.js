const router = require("express").Router();
const Book = require("../models/Book");

//CREATE BOOK
router.post("/", async (req, res) => {
    // const newPost = new Book(req.body);
    const newPost = new Book({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        content: req.body.content
    });
    try {
       await newPost.save();
        res.status(200).json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET BOOK
router.get("/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.status(200).render('book',{
            book
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL BOOK
router.get("/", async (req, res) => {
    const title = req.query.title;
    try {
        let books;
        if (title){
            books = await Book.find({title});
        }else{
            books = await Book.find();
        }
        res.status(200).render('index',{
            books
        });

    } catch (err) {
        res.status(500).json(err);
    }
});





module.exports = router;