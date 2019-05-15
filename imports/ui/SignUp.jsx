import React, {Component} from 'react';
import route from '/imports/routing/router.js';
import {withTracker} from 'meteor/react-meteor-data';
import {Accounts} from 'meteor/accounts-base';
import Navbar from '/imports/ui/components/navbar.jsx';
import Infoz from '/imports/api/UserInfo/collections';
import {Categories}  from '/imports/api/UserInfo/collections';
import {Row, Input,Button} from 'react-materialize';

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
  const description= target.description.value;
  const location = target.location.value;  
  const gender = target.gender.value; 
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
          description,
          gender,
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
          location : this.state.location,          
          description: this.state.description,
          gender: this.state.gender,
          // createdBy:currentUserId,
      }
  const category = {

    profession : this.state.profession,

  }
      Meteor.call('infoz.create',info,(err,res)=>{
        console.log(res)
        if(res){
          const email = Meteor.user().emails[0].address
          route.go('/useraccount?email='+email)
          // route.go('/cards?email='+email)
          console.log("successfully inserted data in Infoz")
        }else{
          console.log('failed to insert data in info')
        }

      });

      Meteor.call('categories.create',category,(err,catRes)=>{
        console.log(catRes)
        if(catRes){
         console.log("successfully inserted data in categories")
        }else{
          console.log('failed to insert data in categories')
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
handleDesriptionChange=(e)=>{
  this.setState({
    description:e.target.value
  })
}
handlePhonenumberChange=(e)=>{
  this.setState({
    phonenumber:e.target.value
  })
}
handleLocationChange=(e)=>{
  this.setState({
    location:e.target.value
  })
}
handleGenderChange=(e)=>{
  this.setState({
    gender:e.target.value
  })
}
deleteAccount=(e,id)=>{
  e.preventDefault();      
    Meteor.call('infoz.deleteAccount',id);
  // Meteor.logout(); 
  // Meteor.call('infoz.del',id)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  // route.go('/')      
}
render(){
  return(
    <div className="main2">
    <Navbar/>
      {/* <div className="row"id="signUp">
      
       <form className="col s12" onSubmit = {this.getUserData}>
       <div className="row">
       <div className=" col s4">
        <h4 id="signup-heading">Sign Up</h4>
       </div>
       </div>
                 <div className="row">
                    <div className=" col s4">
                    </div>
                      <div className="input-field col s4 signUp-input">
                        <input  name="name" type="text" onChange={this.handleNameChange} className="validate"/>
                        <label type="text">Names</label>
                      </div>
                 </div>
                 <div className="row">
                    <div className=" col s4">
                    </div>
                      <div className="input-field col s4 signUp-input">
                        <input name="email" type="email" onChange={this.handleEmailChange} className="validate"/>
                        <label type="text">Email</label>
                      </div>
                 </div>
                  <div className="row">
                    <div className=" col s4">
                    </div>
                      <div className="input-field col s4 signUp-input">
                        <input name="password" type="password" className="validate"/>
                        <label type="password">Create Password</label>
                      </div>
                  </div>
              <div className="row">
               <div className=" col s4">
               </div>
                <div className="input-field col s4 signUp-input">
                  <input name="password2" type="password" className="validate"/>
                   <label type="password">Confirm Password</label>
                </div>
              </div>
              <div className="row">
               <div className=" col s4">
               </div>
                <div className="input-field col s4 signUp-input">
                  <input name="phonenumber" type="number" onChange={this.handlePhonenumberChange} className="validate"/>
                   <label type="number">Phone Number</label>
                </div>
              </div>
              <div className="row">
               <div className=" col s4">
               </div>
               <div className="input-field col s4 signUp-input">
               <Row>

<Input s={12} type='select' label="Profession" name="profession" defaultValue='2' id="gender-input" onChange={this.handleProfessionChange}>

  <option>Barber</option>
  <option>Carpenter</option>
  <option>Hair Dresser</option>
  <option>Plumber</option>
  <option>Gardeners</option>
  <option>Electrician</option>
  <option>Maid</option>
  <option>Mechanics</option>
  <option>Brick Layers</option>
  
  




</Input>

</Row>
                </div>
              </div>
              <div className="row">
               <div className=" col s4">
               </div>
               <div className="input-field col s4 signUp-input">
                  <input name="location" type="text" className="validate" onChange={this.handleLocationChange}/>
                   <label type="text">Location</label>
                </div>
              </div>
              <div className="row">
<div className=" col s4">
</div>
<div className="input-field col s4 signUp-input">
  <textarea name="description" className="materialize-textarea" onChange={this.handleDesriptionChange}></textarea>
    <label type="textarea">Describe your yourself briefly..</label>
 </div>
</div>
<div className="row">
<div className=" col s4">
</div>
<div className="input-field col s4">
<Row>
<Input s={12} type='select' label="Gender" defaultValue='2' id="gender-input" name="gender" onChange={this.handleGenderChange}>
<option >male</option>
<option >female</option>
</Input>
</Row>
 </div>
</div>   
              <button type="Primary" className="btn btn-primary cnt" id="signup-button"><a href="/useraccount"></a>Sign Up</button>
             </form> */}
             {/* <button type="Danger" className="btn btn-primary delete" onClick={e =>this.deleteAccount(e,Infoz._id)}>
Delete Account 
</button>                  */}
           {/* </div> */}
    <form onSubmit = {this.getUserData}>  
        <div class="row">   
          <Row className="sign-up-field col-6">
            <Input s={6} label="Names" type="text" onChange={this.handleNameChange} className="validate"/>
            <Input s={6} label="Email"  name="email" type="email" onChange={this.handleEmailChange} className="validate"/>
            <Input  s={12} label="Creat password" name="password" type="password" className="validate"/>
            <Input s={12} label="confirm password"  name="password2" type="password" className="validate"/>
            <Input s={12} label="Phone Number" name="phonenumber" type="number" onChange={this.handlePhonenumberChange} className="validate" />
            <Input s={12} type='select' label="Profession" name="profession" defaultValue='2' id="gender-input" onChange={this.handleProfessionChange}>

            <option>Barber</option>
            <option>Carpenter</option>
            <option>Hair Dresser</option>
            <option>Plumber</option>
            <option>Gardeners</option>
            <option>Electrician</option>
            <option>Maid</option>
            <option>Mechanics</option>
            <option>Brick Layers</option>

          </Input>
          <Input s={6} label="Location" name="location" type="text" onChange={this.handleLocationChange} className="validate"/>
          <Input s={6} label="Bio" type="textarea" name="description" className="materialize-textarea" onChange={this.handleDesriptionChange}/>
          <Input s={12} type='select' label="Gender" defaultValue='2' id="gender-input" name="gender" onChange={this.handleGenderChange}>
            <option >male</option>
            <option >female</option>
          </Input>
          <Button s={6} waves='light' href='/useraccount' className="SignUpButton">Create Account</Button>
          {/* <button type="Primary" className="btn btn-primary cnt" id="signup-button"><a href="/useraccount"></a>Create Account</button> */}
        </Row>
        </div>
  </form>
      
     <div style={{display:'flex', justifyContent:'center'}}><p>Already have an account?<a href="/login">Sign In</a></p></div>
        
          </div>
        )
    }
}
export default withTracker(() => {
  Meteor.subscribe('infoz');
  Meteor.subscribe('users');
  Meteor.subscribe('categories');
  
   return {
       infoz : Infoz.find().fetch(),   
       categories : Categories.find().fetch(),
   };
})(SignUp);