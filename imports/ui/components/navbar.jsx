import {Meteor} from 'meteor/meteor';
import React, { Component } from 'react';



export default class Navbar extends Component {


  render() {
    return (
      <div>
        <nav id="Nav">
  <div className="nav-wrapper container">
    <a href="/" className="brand-logo">99JOBS</a>    
    <ul className="right hide-on-med-and-down">
      <li className="hoverable"><a href="/login">Login</a></li>
      <li className="hoverable"><a href="/signup">Sign Up</a></li>
    </ul>
  </div>
</nav>
</div>

    );
  }
}
