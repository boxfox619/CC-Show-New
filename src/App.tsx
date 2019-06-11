import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from "redux";
import './App.css';
import createRoutes from "./routes";

interface Props extends React.Props<App> {
    store: Store,
    routes: any
}

export default class App extends React.Component<Props, {}> {

    public render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                {createRoutes(store)}
            </Provider>
        );
    }
}
