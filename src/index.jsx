import React from 'react';
import { render } from 'react-dom';
import './styles/scss/styles.scss'
import 'bootstrap';
import Main from './components/main.jsx';
import store from './storage/store.js';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import { Provider } from 'react-redux';

const App = () => {
    return (
        <React.StrictMode>
            <Router>
                <Provider store={store}>
                    <Main />
                </Provider>
            </Router>
        </React.StrictMode>
    )
}

render(<App />, document.getElementById('app'))