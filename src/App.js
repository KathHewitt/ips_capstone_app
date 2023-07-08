import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import SearchPage from './components/pages/SearchPage';
import './App.css';

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LoginPage } />
                    <Route path="/search" component={ SearchPage } />
                </Switch>
            </div>
        </Router>
    )
}