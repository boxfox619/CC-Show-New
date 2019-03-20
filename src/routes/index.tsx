import * as React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Store} from "redux";
import asyncComponent from 'src/core/hoc/asyncComponent';
import EditorPage from './EditorPage';

export const createRoutes = (store: Store) => (
    <Router>
        <>
            <Route path="/" component={asyncComponent(EditorPage(store))} />
        </>
    </Router>
);

export default createRoutes