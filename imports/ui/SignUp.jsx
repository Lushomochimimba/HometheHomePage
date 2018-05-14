import React, {Component} from 'react';
import route from '/imports/routing/router.js';
import {Accounts} from 'meteor/accounts-base';
import Navbar from '/imports/ui/components/navbar.jsx';







export default class SignUp extends Component{

  
constructor(props){
  super(props);
  this.state={
      error:''
  }
}

getUserData=(e)=>{
  e.preventDefault();
  const {target} =e;
  const name = target.name.value;
  const email = target.email.value;
  const password = target.password.value;
  const password2 = target.password2.value;
  const phonenumber = target.phonenumber.value;
  const profession = target.profession.value;
  const location = target.location.value;  
  if(password.trim() !== password2.trim()){
      this.setState({
          error:'do not use password as password'
      })
      return;
  }
//   if(password.length<=6){
//       this.setState({
//           error:'password should be longer than characters'
//       })
//       return;
//   }

  const user ={
      email,
      password,
      profile:{
          name,
          phonenumber,
          profession,
          location,
          phonenumber
      },
      createdAt: new Date()
  }
  Accounts.createUser(user, error =>{
      error ? console.log(error.reason) : console.log('Account has been successful');
  })


}

    render(){
        return(
          <div >
          <Navbar/>
                <h1 className="cnt">Sign Up   </h1>
            <div className="SignUp center">
             <form className="col s12" onSubmit = {this.getUserData}>
              <div className="row">
               <div className=" col s4">
               </div>
                <div className="input-field col s4">
                  <input placeholder="Placeholder" name="first_name" type="text" className="validate"/>
                   <label type="first_name">First Name</label>
                </div>
              </div>
              <div className="row">
               <div className=" col s4">
               </div>
                <div className="input-field col s4">
                  <input name="last_name" type="text" className="validate"/>
                   <label type="last_name">Last Name</label>
                </div>
              </div>
              <div className="row">
               <div className=" col s4">
               </div>
                <div className="input-field col s4">
                  <input name="email" type="email" className="validate"/>
                   <label type="email">Email</label>
                </div>
              </div>
              <div className="row">
               <div className=" col s4">
               </div>
                <div className="input-field col s4">
                  <input name="password" type="password" className="validate"/>
                   <label type="password">Create Password</label>
                </div>
              </div>
              <div className="row">
               <div className=" col s4">
               </div>
                <div className="input-field col s4">
                  <input name="password2" type="password" className="validate"/>
                   <label type="password">Confirm Password</label>
                </div>
              </div>
              <div className="row">
               <div className=" col s4">
               </div>
                <div className="input-field col s4">
                  <input name="phonenumber" type="number" className="validate"/>
                   <label type="email">Phone Number</label>
                </div>
              </div>
              <div className="row">
               <div className=" col s4">
               </div>
               <div className="input-field col s4">
                  <input name="profession" type="text" className="validate"/>
                   <label type="text">Profession</label>
                </div>
              </div>
              <div className="row">
               <div className=" col s4">
               </div>
               <div className="input-field col s4">
                  <input name="location" type="text" className="validate"/>
                   <label type="text">Location</label>
                </div>
              </div>
              <button type="Primary" className="btn btn-primary cnt">Sign Up</button>
             </form>              
              <p>Already have an account?<a href="/login">Sign In</a></p>
           </div>
          </div>
        )
    }
}
