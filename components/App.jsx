import React from 'react'
import {BrowserRouter, Switch, Route, Link, NavLink, Redirect} from 'react-router-dom';

import About from './About';
import Home from './Home';
import Profile from './Profile';
import AboutTest from './AboutTest';
import NotFound from "./NotFound";

const homeProps = {example: 'home'};
const aboutProps = {example: 'about'};

const App = () => (
    <BrowserRouter>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
                <NavLink activeStyle={{ color: 'green'}} to="/about">About page</NavLink>
                <NavLink activeStyle={{ color: 'red'}} to="/" exact>Home page</NavLink>
                <NavLink activeStyle={{ color: 'black'}} to="/About/test" >About/test page</NavLink>
                <NavLink activeStyle={{ color: 'pink'}} to="/profile">Profile page</NavLink>


        </div>
        <Switch>
            <Route exact path="/">
                <Home props={homeProps}/>
            </Route>
            <Route exact path="/About" render={props => <About routerProps={props} aboutProps={aboutProps}/>}/>
            <Route path="/About/test" component={AboutTest}/>
            <Route path="/Profile" component={Profile}/>
            <Route component={NotFound} />
            {/*<Redirect to="/" />*/}
        </Switch>
    </BrowserRouter>
);

export default App;
