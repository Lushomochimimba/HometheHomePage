import {Meteor} from 'meteor/meteor';
import React, { Component } from 'react';
// import './App.css';
import route from '/imports/routing/router.js';
import {withTracker} from 'meteor/react-meteor-data';



export default class Home extends Component {
//   componentWillMount(){
//        function (){
//     $(document).ready(function(){
//       $('.parallax').parallax();
//     });
// };
//   }
 


  render() {
    return (
      <div>

        <nav className="light-blue">
  <div className="nav-wrapper container">
    <a href="#" className="brand-logo">99JOBS</a>    
    <ul className="right hide-on-med-and-down">
      <li className="hoverable"><a href="/login">Login</a></li>
      <li className="hoverable"><a href="/signup">Sign Up</a></li>
    </ul>
  </div>
</nav>


{/* <!-- Content --> */}
<div className="parallax-container center valign-wrapper">
  <div className="container">
    <div className="row">
      <div className="col s12 white-text">
        <h2 className="teal-text teal-text lighten-2">work for your skill</h2>
        <p>99JOBS , getting clients and the service providers together!</p>
        <a className="waves-effect waves-light btn-large teal lighten-2">Get Help</a>
      </div>
    </div>
  </div>
  
  <div className="parallax">
    <img src="/images/profile.jpeg"/>
  </div>

</div>

<div className="container">
  <div className="row">
     <div className="col m4 s12">
       <div className="icon-block">
         <h2 className="center light-blue-text">
         <i className="fa fa-crown fa-4x" style={{foregroundcolor:"black"}}></i>         </h2>
         <h5 className="center">Our Goal</h5>
         <p className="light">
         Our goal is to connect you with local (and remote) people who need your skills, giving them access to quality talent and giving you hands-on experience and a pay-cheque of course! We'll be operating initially in Zambia.         </p>
       </div>
       
     </div>
     <div className="col m4 s12">
       <div className="icon-block">
         <h2 className="center light-blue-text">
         <i className="fa fa-child"></i>        </h2>
         <h5 className="center">Who is 99 Jobs for?</h5>
         <p className="light">
         For graphic designers, web designers, developers, teachers, photographers, artists, writers, accountants, videographers, choreographers, small business owners, students, employees, employers, Anybody you can think of.         </p>
       </div> 
     </div>
     <div className="col m4 s12">
       <div className="icon-block">
         <h2 className="center light-blue-text">
         <i className="fa fa-question-circle"></i>         
         </h2>
         <h5 className="center">Why 99 Jobs</h5>
         <p className="light">
         Do you feel stuck and unhappy with your current job? Are you having difficulties with finding a service provider? Or maybe your issue is the high cost of doing business. We at 99 Jobs are building you a new Freelance marketplace platform that promises to be Awesome!!!         </p>
       </div> 
     </div>
   </div>
</div>

<div className="parallax-container center valign-wrapper">
  <div className="parallax"><img src="https://images.unsplash.com/photo-1463780324318-d1a8ddc05a11?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop="/>
  </div>
  
 
</div>


{/* <!-- Footer --> */}
<footer className="page-footer orange col s6">
  <div className="container">
    <div className="row">
      <div className="col l6 s12">
        <h5 className="white-text">Project Bio</h5>
        <hr/>
        
        <p className="grey-text text-lighten-4">
          We are a team of upcoming developers from Hackers Guild working on this project like it's our full time job. Any amount of your support will help continue on the development of this project and we greatly appreciate.
        </p>
      </div>
      <div className="col l3 s12">
        <h5 className="white-text"></h5>
        <hr className="up"/>
      </div>
      <div className="col l3 s12">
        <h5 className="white-text">Owners</h5>
        <hr/>
        <ul>
          <li>
            <a href="#!" className="grey-text text-lighten-3">Lushomo Chimimba  <i className="fa fa-github"></i></a>
          </li>
          <li>
            <a href="#!" className="grey-text text-lighten-3">Perseverance  <i className="fa fa-github"></i></a>
          </li>
          <li>
            <a href="#!" className="grey-text text-lighten-3">Joseph Yumba  <i className="fa fa-github"></i></a>
          </li>
          <li>
            <a href="#!" className="grey-text text-lighten-3">Sithembinkhosi Siwo  <i className="fa fa-github"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="footer-copyright">
    <div className="container">
      © 2017 Copyright Text
    </div>
  </div>
</footer>
     </div>
    );
  }
}
