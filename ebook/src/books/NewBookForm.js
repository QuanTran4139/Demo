import React, { useState } from "react";
import Card from "../ui/Card";
import classes from  './NewBookForm.module.css';
import TextEditor from './TextEditor.js';
import axios from 'axios';


function NewBookForm() {
    const [title,setTitle, ] = useState("");
    const [image,setImage] = useState("");
    const [author,setAuthor] = useState("");
    const [descript,setDescript] = useState("");
    const [content,setContent] = useState("");

    const addBook = () => {
        axios.post("http://localhost:3001/api/insert", {
            Title: title,
            image: image,
            Author: author,
            Descrip: descript,
            Content: content
        }).then(() => {
            alert("Insert success");
        });
    };

    return (
        <Card>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor="title">Book Title</label>
                    <input
                        type="text"
                        required id="title1"
                        name="title"
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Book Image</label>
                    <input
                        type='url'
                        required id="image"
                        name="image"
                        onChange={(e) => {
                            setImage(e.target.value);
                        }}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="author">Author</label>
                    <input
                        type='text'
                        required id="author"
                        name="author"
                        onChange={(e) => {
                            setAuthor(e.target.value);
                        }}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        required rows='5'
                        name="description"
                        onChange={(e) => {
                            setDescript(e.target.value);
                        }}
                    ></textarea>
                </div>

                <div className={classes.control}>
                    <label htmlFor="content">Book Content</label>
                    <TextEditor
                        name="content"
                        onChange={(e) => {
                            setContent(e.target.value);
                        }} />
                </div>
                <div className={classes.actions}>
                    <button onClick={addBook}>Add Book</button>
                </div>

            </form>



        </Card>

    )
}

export default NewBookForm;