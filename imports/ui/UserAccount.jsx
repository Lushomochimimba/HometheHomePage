import React, {Component, Fragment} from 'react';
import route from '/imports/routing/router.js';
// import {Accounts} from 'meteor/accounts-base';
import loadmaterialize from './materialize.js' 



export default class UserAccount extends Component{

   
    render(){
        return(
            <div className ="col 4">
                 <img className="materialboxed" width="200" height="200" src="/images/profile.jpeg"/>
                 <span className ="col sm 4">
                 <h4>Emeritus E.</h4>
                 <p>Plumber</p>
                 <p>Contact: +72865837678379</p>
                 <p>Email: example@gmail.com</p>
                 </span>

                 <h4>Expertise</h4>
                 <h4 className="PD">Personal Details</h4>
                 
            </div>
        )
    }
}