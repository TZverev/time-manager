import React from 'react';
import { render } from 'react-dom';
import LoginMenu from './components/login-menu/login-menu.jsx';
import './styles/scss/styles.scss'
import 'bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

const App = () => {
    return (
        <React.StrictMode>
            <Router>
                <LoginMenu />
            </Router>
        </React.StrictMode>
    )
}

render(<App />, document.getElementById('app'))