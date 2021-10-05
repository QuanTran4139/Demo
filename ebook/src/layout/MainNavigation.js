import React from "react";
import {Link} from "react-router-dom";

import classes from './MainNavigation.module.css';


function MainNavigation(){
    return(
        <header className={classes.header}>
            <div className={classes.logo}>E-Book Manager</div>
            <nav>
                <ul>
                    <li>
                    <Link to='/'>All Books</Link>
                    </li>
                    <li>
                        <Link to='/new-book'>Add New Book</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>My Favorites Books</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;