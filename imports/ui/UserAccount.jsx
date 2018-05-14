import React, {Component, Fragment} from 'react';
import route from '/imports/routing/router.js';
// import {Accounts} from 'meteor/accounts-base';
import loadmaterialize from './materialize.js' ;




export default class UserAccount extends Component{
    logOut=(e)=>{
    e.preventDefault();
    Meteor.logout();
    route.go('/login')
  }
   
      render() {
        return <div>    
             <div className="row">
              <div className="col s3">
              <img src={this.props.url} />

              <input type="file"/>
               <img className="materialboxed" width="200" height="200" src="/images/profile.jpeg"/>
              </div>
            <div className="col s5">
             <span>
                 <h4>Emeritus E.</h4>
                 <p>Plumber</p>
                 <p><i className="fa fa-phone" aria-hidden="true"></i> +72865837678379</p>
                 <p><i className="fa fa-envelope" aria-hidden="true"></i> example@gmail.com</p>
             </span>
            </div>
            </div>
            <button type="Primary" className="btn btn-primary" onClick={this.logOut}>
        Logout
        </button>
           </div>
                 

        
    }
}