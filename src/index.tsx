import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import createStore from "./core/store/createStore";
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes';

const store = createStore();
ReactDOM.render(
  <App store={store} routes={routes(store)}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
