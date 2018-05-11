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
           <i className="material-icons">flash_on</i>  
         </h2>
         <h5 className="center">Speeds up development</h5>
         <p className="light">
           We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.
         </p>
       </div>
       
     </div>
     <div className="col m4 s12">
       <div className="icon-block">
         <h2 className="center light-blue-text">
           <i className="material-icons">group</i>  
         </h2>
         <h5 className="center">User Experience Focused</h5>
         <p className="light">
           By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.
         </p>
       </div> 
     </div>
     <div className="col m4 s12">
       <div className="icon-block">
         <h2 className="center light-blue-text">
           <i className="material-icons">settings</i>  
         </h2>
         <h5 className="center">Easy to work with</h5>
         <p className="light">
           We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.
         </p>
       </div> 
     </div>
   </div>
</div>

<div className="parallax-container center valign-wrapper">
  <div className="parallax"><img src="https://images.unsplash.com/photo-1463780324318-d1a8ddc05a11?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop="/>
  </div>
  
  <div className="container white-text">
    <div className="row">
      <div className="col s12">
        <h5>A modern responsive front-end framework based on Material Design</h5>
      </div>
    </div>
  </div>
</div>

<div className="container center-align">
 <div className="section">
    <div className="row">
    <div className="col s12">
      <h4>Contact Us</h4>
      <p className="light left-align">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
      </p>
    </div>      
  </div>
  </div>
</div>

<div className="parallax-container center valign-wrapper">
  <div className="parallax"><img src="/images/profile.jpeg"/>
  </div>
  
  <div className="container white-text">
    <div className="row">
      <div className="col s12">
        <h5>A modern responsive front-end framework based on Material Design</h5>
      </div>
    </div>
  </div>
</div>

{/* <!-- Footer --> */}
<footer className="page-footer orange">
  <div className="container">
    <div className="row">
      <div className="col l6 s12">
        <h5 className="white-text">Company Bio</h5>
        <p className="grey-text text-lighten-4">
          We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.
        </p>
      </div>
      <div className="col l3 s12">
        <h5 className="white-text">Settings</h5>
        <ul>
          <li>
            <a href="#!" className="grey-text text-lighten-3">Link 1</a>
          </li>
          <li>
            <a href="#!" className="grey-text text-lighten-3">Link 2</a>
          </li>
          <li>
            <a href="#!" className="grey-text text-lighten-3">Link 3</a>
          </li>
          <li>
            <a href="#!" className="grey-text text-lighten-3">Link 4</a>
          </li>
        </ul>
      </div>
      <div className="col l3 s12">
        <h5 className="white-text">Connect</h5>
        <ul>
          <li>
            <a href="#!" className="grey-text text-lighten-3">Link 1</a>
          </li>
          <li>
            <a href="#!" className="grey-text text-lighten-3">Link 2</a>
          </li>
          <li>
            <a href="#!" className="grey-text text-lighten-3">Link 3</a>
          </li>
          <li>
            <a href="#!" className="grey-text text-lighten-3">Link 4</a>
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
