import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/shared/header/Header";
import List from "./components/list/List";
import Search from "./components/search/Search";

class App extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Header />

                    <Route exact path="/">
                        <List />
                    </Route>
                    <Route path="/search">
                        <Search />
                    </Route>
                </BrowserRouter>
            </>
        );
    }
}

export default App;
