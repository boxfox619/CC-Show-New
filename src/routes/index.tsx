import * as React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Store } from "redux";
import asyncComponent from '../core/hoc/AsyncComponent';
import EditorPage from './EditorPage';
import IndexPage from './IndexPage';

export const createRoutes = (store: Store) => (
    <Router>
        <>
            <Route path="/" component={asyncComponent(IndexPage(store))} />
            <Route path="/editor" component={asyncComponent(EditorPage(store))} />
        </>
    </Router>
);

export default createRoutes