import React, {Component} from 'react';
import route from '/imports/routing/router.js';
import {withTracker} from 'meteor/react-meteor-data';
import {Accounts} from 'meteor/accounts-base';
import Navbar from '/imports/ui/components/navbar.jsx';
import Infoz from '../api/UserInfo/collections.js';






export class SignUp extends Component{
constructor(props){
  super(props);
  this.state={
      error:'',
      name:"",
      profession :"",
      email :"",
      phonenumber :""

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
  const currentUserId = Meteor.userId();
  const info  = {
          name: this.state.name,
          profession : this.state.profession,
          email : this.state.email,
          phonenumber : this.state.phonenumber,
          // createdBy:currentUserId,
      }
      Meteor.call('infoz.create',info,(err,res)=>{
        console.log(res)
        if(res){
          const email = Meteor.user().emails[0].address
          route.go('/useraccount?email='+email)
        }else{
          console.log('failed to insert data in info')
        }

      });
}

handleNameChange=(e)=>{
  this.setState({
    name:e.target.value
  })
}
handleProfessionChange=(e)=>{
  this.setState({
    profession:e.target.value
  })
}
handleEmailChange=(e)=>{
  this.setState({
    email:e.target.value
  })
}
handlePhonenumberChange=(e)=>{
  this.setState({
    phonenumber:e.target.value
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
                  <input placeholder="Placeholder" name="name" type="text" onChange={this.handleNameChange} className="validate"/>
                   <label type="text">Names</label>
                </div>
              </div>
              <div className="row">
               <div className=" col s4">
               </div>
                <div className="input-field col s4">
                  <input name="email" type="email" onChange={this.handleEmailChange} className="validate"/>
                   <label type="text">Email</label>
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
                  <input name="phonenumber" type="number" onChange={this.handlePhonenumberChange} className="validate"/>
                   <label type="number">Phone Number</label>
                </div>
              </div>
              <div className="row">
               <div className=" col s4">
               </div>
               <div className="input-field col s4">
                  <input name="profession" type="text" onChange={this.handleProfessionChange} className="validate"/>
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
              <button type="Primary" className="btn btn-primary cnt"><a href="/useraccount"></a>Sign Up</button>
             </form>              
              <p>Already have an account?<a href="/login">Sign In</a></p>
           </div>
          </div>
        )
    }
}
export default withTracker(() => {
  Meteor.subscribe('infoz');
   return {
       infoz : Infoz.find().fetch(),
   };
})(SignUp);