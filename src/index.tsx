import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import routes from './routes';
import {createReduxStore} from "./core/store";
import initReducers from './reducers';

const store = createReduxStore();
initReducers(store);
ReactDOM.render(
  <App store={store} routes={routes(store)}/>,
  document.getElementById('root') as HTMLElement
);
