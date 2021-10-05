import React from 'react';
import classes from './BookItem.module.css';
import Card from '../ui/Card';
import {
	BrowserRouter as Router,
	//Switch,
	//Route,
	Link,
	//useRouteMatch,
	//useParams,
	useHistory,
	//withRouter
} from "react-router-dom";
//import ReadBookContent from '../pages/BookContent';
//import FavoriteBooksPage from "../pages/Favorites";

function BookItem(props) {
	const history = useHistory();
	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					<img src={props.image} alt={props.title} />
				</div>
				<div className={classes.content}>
					<h3>{props.title}</h3>
					<h4>{props.author}</h4>
					<p>{props.description}</p>
				</div>
				<div className={classes.actions}>
					<Router>
						{/*<Link to={"/read-book/"+props.id}><button>Read this book</button></Link>*/}
						<button onClick={() => history.push("/read-book/" + props.id)}>Read this book</button>
						<Link to='/favorites'><button>To favorites</button></Link>
					</Router>
				</div>
			</Card>
		</li>
	)
}

export default BookItem;