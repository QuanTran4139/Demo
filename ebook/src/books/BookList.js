import classes from './BookList.module.css';
import React, { useEffect, useState } from "react";
import BookItem from "./BookItem";
import axios from 'axios';




function Book() {
    const [setBookList, BookList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001').then((response) => {
            BookList(response.data)
        });
    }, []);
    return (
        <ul className={classes.list}>
            {setBookList.map(book => <BookItem
                id={book.Id}
                image={book.image}
                title={book.Title}
                author={book.Author}
                description={book.Descrip}
                content={book.Content}/>
            )}
        </ul>
    )
}
export default Book
//return (
//    <ul className={classes.list}>
//        {response.map(res =>
//            id:{res.Id}
//        image:{res.image}
//        title:{res.Title}
//        author:{res.Author}
//        description:{res.Descrip}
//                    )}
//    </ul>
//)