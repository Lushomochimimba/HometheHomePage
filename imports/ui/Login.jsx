import React, {Component} from 'react';
import route from '/imports/routing/router.js';
import {Accounts} from 'meteor/accounts-base';
import Navbar from '/imports/ui/components/navbar.jsx';
import {UserAccount} from '/imports/ui/UserAccount.jsx'





export default class Login extends Component{
  constructor(props){
    super(props);
  }
  
  logUserIn=(e)=>{
    e.preventDefault();
    const {target} =e;
    const email = e.target.email.value;
    const password = e.target.password.value;
    Meteor.loginWithPassword(email,password, err=>{
      err? console.log(err.reason):
      //  email = Meteor.user().emails[0].address
       route.go('/useraccount?email='+email);
    })
  }
 

    render(){
        return(
          <div className="main">
             <Navbar/>
         
         
      <div className="center" id="login">
       
        <div className="icon-block">
        <i class="fa fa-user-circle  fa-3x"></i>
        </div>
        <h4 id="login-heading">login</h4>
        <br/>
       <form className="col s12" onSubmit = {this.logUserIn}>
       
        <div className="row">
         <div className=" col">
         </div>
          <div className="input-field">
            <input name="email" type="email" className="validate"/>
             <label type="email">Email</label>
          </div>
        </div>
        <div className="row">
         <div className=" col s4">
         </div>
          <div className="input-field ">
            <input name="password" type="password" className="validate"/>
             <label type="password">Password</label>
          </div>
        </div>
        <button type="Primary" className="btn btn-primary waves-effect waves-light center"id="login-button">
        login
        </button>
       </form>              
     </div>
    </div>
    
    
        )
    }
}
