import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import {RatingUs} from "./components/RatingUs/RatingUsComponent";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/:id" children={RatingUs}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
