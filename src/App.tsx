import React from 'react';
import {LoginPage} from "./pages/login";
import { Route, Switch } from 'react-router-dom';
import {QuizPage} from "./pages/quiz";
import {ResultPage} from "./pages/result";
import {DashboardPage} from "./pages/dashboard";
import {AuthCode} from "./pages/auth";
import './App.css';

function App() {

    return (
        <>
            <Switch>
                <Route path='/dashboard' component={DashboardPage} />
                <Route path='/auth-code' component={AuthCode} />
                <Route path='/login' component={LoginPage} />
                <Route path='/quiz' component={QuizPage} />
                <Route path='/result' component={ResultPage} />
                <Route path='/' component={DashboardPage} />
            </Switch>
        </>
    );
}

export default App;
