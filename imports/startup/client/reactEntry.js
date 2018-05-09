import {Meteor} from 'meteor/meteor';
// import '/imports/startup/client/index.js';
// import {Accounts} from 'meteor/accounts-password'
import React from 'react';
import {render} from 'react-dom';
import App from '../../ui/App'

fn = () =>{
    render(<App/>,document.getElementById('render-target'));

}
Meteor.startup(fn);

