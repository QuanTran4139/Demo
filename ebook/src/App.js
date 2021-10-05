import React from "react";
// import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch } from 'react-router-dom';

import AllBooksPage from "./pages/AllBooks";
import FavoriteBooksPage from "./pages/Favorites";
import NewBooksPage from "./pages/NewBook";
import ReadBookContent from "./pages/BookContent";
import Layout from './ui/Layout';
function App() {
    return (
        <Layout>
            <div>
                <Switch>
                    <Route path='/read-book/:id'>{ReadBookContent} </Route>
                    <Route path='/new-book'>
                        <NewBooksPage />
                    </Route>
                    <Route path='/favorites'>
                        <FavoriteBooksPage />
                    </Route>
                    <Route path='/' exact>
                        <AllBooksPage />
                    </Route>
                    {/*<Route exact path='/read-book/:id'>
                	<ReadBookContent />
                </Route>*/}
                </Switch>
            </div>
        </Layout>

    );
}

export default App;