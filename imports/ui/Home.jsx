import {Meteor} from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import {withTracker} from 'meteor/react-meteor-data';
import Navbar from '/imports/ui/components/navbar.jsx';
import Footer from '/imports/ui/components/footer.jsx';





export default class Home extends Component {

  render() {
    return (
      <div>

        <Navbar/>
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
  
  {/* <div className="parallax"> */}
    {/* <img src="/images/profile.jpeg"/> */}
  {/* </div> */}

</div>

<div className="container">
  <div className="row">
     <div className="col m4 s12">
       <div className="icon-block">
         <h2 className="center light-blue-text">
         <i className="fa fa-crown fa-4x"></i>         </h2>
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
<Footer/>
     </div>
    );
  }
}
