import * as React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import './custom.css'
import { Adventure } from './components/Adventure';
import Home from './components/Home';

export default () => (
    <Router>
        <div>
            <Route path={"/"} exact component={Home}></Route>
            <Route path={"/adventure"} component={Adventure}></Route>
        </div>
    </Router>
);
