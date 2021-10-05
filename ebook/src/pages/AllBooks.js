import React, { useEffect } from "react";
import BookList from "../books/BookList";
import { Book } from '../books/BookList';
/*import Book from '../books/BookList';*/
import {
    //BrowserRouter as Router,
    //Switch,
    //Route,
    //Link,
    //useRouteMatch,
    //useParams,
    //useHistory,
    //withRouter
} from "react-router-dom";
import axios from 'axios';
import classes from '../books/BookList.module.css';

//const DUMMY_DATA = [
//    {
//        id: '1',
//        title: 'This is a first book',
//        image:
//            'https://cdn.tgdd.vn//GameApp/-1//AnhHarryPotter2-800x450-1.jpg',
//        author: 'J.K Rowling ',
//        description:
//            'This is an amazing book about Harry Potter',
//        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, amet beatae corporis cumque deserunt dignissimos doloremque, eaque et facilis hic illo incidunt ipsum iure, laudantium perferendis quaerat repudiandae sit temporibus.' +
//            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, amet beatae corporis cumque deserunt dignissimos doloremque, eaque et facilis hic illo incidunt ipsum iure, laudantium perferendis quaerat repudiandae sit temporibus.' +
//            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, amet beatae corporis cumque deserunt dignissimos doloremque, eaque et facilis hic illo incidunt ipsum iure, laudantium perferendis quaerat repudiandae sit temporibus.' +
//            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, amet beatae corporis cumque deserunt dignissimos doloremque, eaque et facilis hic illo incidunt ipsum iure, laudantium perferendis quaerat repudiandae sit temporibus.' +
//            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, amet beatae corporis cumque deserunt dignissimos doloremque, eaque et facilis hic illo incidunt ipsum iure, laudantium perferendis quaerat repudiandae sit temporibus.'
//    },
//    {
//        id: '2',
//        title: 'This is a second book',
//        image:
//            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//        author: 'William Shakespeare',
//        description:
//            'This is a book about a tragedy',
//        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, amet beatae corporis cumque deserunt dignissimos doloremque, eaque et facilis hic illo incidunt ipsum iure, laudantium perferendis quaerat repudiandae sit temporibus.' +
//            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, amet beatae corporis cumque deserunt dignissimos doloremque, eaque et facilis hic illo incidunt ipsum iure, laudantium perferendis quaerat repudiandae sit temporibus.' +
//            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, amet beatae corporis cumque deserunt dignissimos doloremque, eaque et facilis hic illo incidunt ipsum iure, laudantium perferendis quaerat repudiandae sit temporibus.' +
//            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, amet beatae corporis cumque deserunt dignissimos doloremque, eaque et facilis hic illo incidunt ipsum iure, laudantium perferendis quaerat repudiandae sit temporibus.' +
//            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, amet beatae corporis cumque deserunt dignissimos doloremque, eaque et facilis hic illo incidunt ipsum iure, laudantium perferendis quaerat repudiandae sit temporibus.'
//    },
//    {
//        id: '3',
//        title: 'Third book',
//        content: 'This is content'
//    }
//];
//function Book() {
//    useEffect(() => {
//        axios.get('http://localhost:3001').then((response) => {
//            return (
//                <ul className={classes.list}>
//                    {response.map(res => <BookList
//                        id={res.Id}
//                        image={res.image}
//                        title={res.Title}
//                        author={res.Author}
//                        description={res.Descrip} />
//                    )}
//                </ul>
//            )
//        })
//    }, [])
//}
function AllBooksPage() {
    return (
        <section>
            <h1>All Books</h1>
            <BookList />
        </section>
    )

}
export default AllBooksPage;


export function GetContent(id) {
    //console.log("kenobi");
    const getId = BookList[id];
    return  BookList.content;
    
}