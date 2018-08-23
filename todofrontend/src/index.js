import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import TodoReducer from "./store/reducers/todoReducer";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(TodoReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
