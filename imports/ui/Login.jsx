import React, {Component} from 'react';
import route from '/imports/routing/router.js';



export default class Login extends Component{


    render(){
        return(
            <div>
                <h1>Log In</h1>
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
          </form>
          <button type="Primary" className="btn btn-primary">Sign In</button>
            </div>
            </div>
        )
    }
}
