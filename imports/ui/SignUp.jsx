import React, {Component} from 'react';
import route from '/imports/routing/router.js';


export default class SignUp extends Component{


    render(){
        return(
            <div>
                <h1>Sign Up</h1>
            <div className="SignUp">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
          <label type="first_name">First Name</label>
        </div>
        <div className="input-field col s12">
          <input id="last_name" type="text" className="validate"/>
          <label type="last_name">Last Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate"/>
          <label type="email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate"/>
          <label type="password">Create Password</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate"/>
          <label type="password">Confirm Password</label>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <div className="input-field inline">

          </div>
        </div>
      </div>
    </form>
    <button type="Primary" className="btn btn-primary">Sign Up</button>
    <p>Already have an account?<a href="#">Sign In</a></p>
  </div>
  </div>
        )
    }
}
