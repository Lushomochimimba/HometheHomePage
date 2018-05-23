import { createRouter } from 'meteor/cultofcoders:meteor-react-routing';
import App from '/imports/ui/App.jsx';
import createBrowserHistory from 'history/createBrowserHistory';
import { Meteor } from 'meteor/meteor';
import React from 'react';
import route from './router.js';
import { Router, Route, Switch } from 'react-router-dom';
import Home from '/imports/ui/Home.jsx'
export default createRouter(App);

const history = createBrowserHistory();

const unauthenticatedPages = [];
const authenticatedPages = []


const publicPage = () => {

    if (Meteor.userId()) {

        history.replace('/useraccount');

    }

};



const privatePage = () => {

    if(!Meteor.userId()) {

       history.replace('/');

    }

};



export const routes = (

    <Router history = {history}>

        <Switch>

          <Route exact path='/' component= {Home} onEnter={publicPage}/>

       {/* <Route exact path='/upload' component={Uploads} onEnter={privatePage}/> */}

          <Route exact path='/useraccount' render={ () => <Home greet='User'/> } onEnter={privatePage} />

          <Route component={Home}/>

        </Switch>

    </Router>

);



export const onAuthChange = (authenticated) => {

    console.log("isAuthenticated: ", authenticated);

    const path = history.location.pathname;

    const isAuthenticatedPage = authenticatedPages.includes(path);

    if (authenticated) {

        console.log(`Authenticated user routed to the path useraccount`);

        history.replace();

    } else if (!authenticated) {

        console.log(`Unauthenticated user routed to the path /`);

        history.replace('/');

    }

};

