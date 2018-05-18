import {Meteor} from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import {withTracker} from 'meteor/react-meteor-data';
import Navbar from '/imports/ui/components/navbar.jsx';
import Footer from '/imports/ui/components/footer.jsx';
import initailize from './materialize.js'





export default class Home extends Component {


// method initailizing parallax
  componentDidMount(){
    initailize();
  }


  render() {
   
    return (
<div>

{/* navigation bar */}
  <Navbar/>

{/* head content */}
  <div className="parallax-container center valign-wrapper" id="Row1">
    <div className="container">
      <div className="row">
        <div className="col s12 white-text">

          <h3 id="Head-text">building client and service provider relationships</h3>
    <div className="row center-align">
            <div className="col m4 s12">  
             <a className="waves-effect waves-light btn-large right-align" id="Head-Button" href='/cards'>Hire    .</a>
           </div>
           <div className="col m4 s12"> 
           <a className="waves-effect waves-light btn-large left-align" id="Head-Button" href='/signup'>Advertise your skills</a>
           </div>
      </div>       
        </div>
      </div>
    </div>
{/* parallaxed image */}
  <div className="parallax">
    <img src="/images/work.jpg" alt="image should load"/>
  </div>

</div>

<div className="row" id="Row2">
  <div className="col">
  <div className="container">
  <h4 className="center ">About 99Jobs</h4>
  <hr/>
{/* first paragraph */}
     <div className="col m4 s12">
       <div className="icon-block">
         <h2 className="center light-blue-text">
         <i className="fa fa-crown fa-4x"></i>         </h2>
         <h5 className="center">Our Goal</h5>
         <p className="light">
         Our goal is to connect you with local (and remote) people who need your skills, giving them access to quality talent and giving you hands-on experience and a pay-cheque of course! We'll be operating initially in Zambia.         </p>
        </div>
     </div>
{/* second paragraph */}
     <div className="col m4 s12">
       <div className="icon-block">
          <h2 className="center light-blue-text">
              <i className="fa fa-child"></i>      
          </h2>
         <h5 className="center"> service providers</h5>
            <p className="light">
                99JOBS aims to connect with local people who need your skills.
                it is our goal to make your skills and talents available for both the zambian and international market.  
            </p>
       </div> 
     </div>
     {/* third paragraph */}

     <div className="col m4 s12">
       <div className="icon-block">
         <h2 className="center light-blue-text">
         <i className="fa fa-question-circle"></i>         
         </h2>
         <h5 className="center">clients</h5>

         <p className="light">
        99JOBS aims to improve the quality of service you get by providing a wider range of recommended skilled individauls not just from your area but also from across the country. 
        </p>
       </div> 
     </div>

   </div>
  </div>
  </div>

{/* parallaxed image */}
  <div className="parallax-container center valign-wrapper" id="Row3">

    <div className="parallax"><img src="/images/work.jpg"/>
    </div>

  </div>

{/* footer code */}
  <Footer/>

</div>
    );
  }
}
