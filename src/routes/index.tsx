import * as React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Store } from "redux";
import asyncComponent from '../core/hoc/AsyncComponent';
import EditorPage from './EditorPage';
import IndexPage from './IndexPage';
import AssetEditorPage from './AssetEditorPage';

export const createRoutes = (store: Store) => (
    <Router>
        <>
            <Route path="/" component={asyncComponent(IndexPage(store))} exact={true} />
            <Route path="/editor" component={asyncComponent(EditorPage(store))} />
            <Route path="/asset" component={asyncComponent(AssetEditorPage(store))} />
        </>
    </Router>
);

export default createRoutes