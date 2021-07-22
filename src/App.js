import React from "react";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {RatingUsPositive} from "./components/RatingUsPositive/RatingUsComponent";
import {RatingUsNegative} from "./components/RatingUsNegative/RatingUsComponent";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/' children={Add}/>
                    <Route exact path="/positive/:id" children={RatingUsPositive}/>
                    <Route exact path="/negative/:id" children={RatingUsNegative}/>
                </Switch>
            </Router>
        </>
    );
}


const Add = () => {
    return 'we are deployed'
}

export default App;
