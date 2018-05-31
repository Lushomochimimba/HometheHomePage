import {Meteor} from 'meteor/meteor';
import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';




export default class Navbar extends Component {

  logOut=(e)=>{
    e.preventDefault();
    Meteor.logout();
    FlowRouter.go('/login')
  }

  render() {
    return (
      <div>
        <nav id="Nav">
  <div className="nav-wrapper container">
    <a href="/" className="brand-logo">99JOBS</a> 
    { 
    Meteor.userId()? 
    <>
    <ul className="right hide-on-med-and-down">
      <li className="hoverable"><a onClick={this.logOut}>LogOut</a></li>
      </ul>
    </>
    :
    <>
    <ul className="right hide-on-med-and-down">
      <li className="hoverable"><a href="/login">Login</a></li>
      <li className="hoverable"><a href="/signup">Sign Up</a></li>
    </ul>
    </>
    }
  </div>
</nav>
</div>

    );
  }
}
