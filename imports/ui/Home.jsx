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
            <div className="col m4  offset-m4 s12" id="buttons">  
             <a className="waves-effect waves-light btn-large right-align" id="Head-Button1" href="/results">Hire</a>
           <br/>
           <a className="waves-effect waves-light btn-large left-align" id="Head-Button2" href="/signup">Advertise your skills</a>
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

<div className="" id="Row2">
  <div className="row">
  <div className="container">
  <h4 className="center "> About Us</h4>
  <hr></hr>

{/* first paragraph block*/}
     <div className="col m4 s12">
          <div className="icon-block">
                 <h2 className="center light-blue-text">
                 <i className="fa fa-handshake-alt"></i>
                 <i className="fa fa-handshake-o" style={{"fontSize":48+"px"}}></i>
                 </h2>
                 {/* paragraph heading */}
              <h5 className="center">Our Goal</h5>
                {/* paragraph */}
            <p className="light align-center">
              <b>99JOBS</b> aims to improve the unemployment rate in zambia and in general improve the zambain market by improving client and service provider relationships.By giving service providers and enterprenuers a platform to advertise themselves to 
              the zambian market and the market in general, we give them <b>an oppotunity to grow themselves and their businesses</b>.99JOBS jobs also want help clients know that the zambian market has more to offer than they realize.
            </p>
          </div>
     </div>
{/* second paragraph block*/}
     <div className="col m4 s12">
       <div className="icon-block">
          <h2 className="center light-blue-text">
          <i class="fa fa-users" style={{"fontSize":48+"px"}}></i>      
          </h2>
         <h5 className="center"> service provider and enterprenuer</h5>
            <p className="light">
              Service providers and enterprenuers play a very important role in the development of the zambian market. <b>99JOBS</b> is determined to help you to grow as an enterprenuer and a service provider.Sign up <a href="/signup">here</a> and help us help you grow in the Zambian market.  
            </p>
       </div> 
     </div>
     {/* third paragraph block*/}

     <div className="col m4 s12">
       <div className="icon-block">
         <h2 className="center light-blue-text">
         <i class="fa fa-user" style={{fontSize:48+"px"}}></i>       
         </h2>
         <h5 className="center">clients</h5>

         <p className="light">
        we aim to improve the quality of service you get by providing a wider range of  recommended local service providers from across the country. 
        </p>
       </div> 
     </div>

   </div>
  </div>
  </div>

{/* parallaxed image */}
  <div className="parallax-container center valign-wrapper" id="Row3">

  {/* svg text */}
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 600 300">

  
  <symbol id="s-text">
    <text textAnchor="middle"
            x="50%" y="50%" dy=".35em">
        
     </text>
  </symbol>

  
   
  <use xlinkHref="#s-text" className="text"
            ></use>
  <use xlinkHref="#s-text" className="text"
            ></use>
  <use xlinkHref="#s-text" className="text"
            ></use>
  <use xlinkHref="#s-text" className="text"
            ></use>

</svg>
    <div className="parallax"><img src="/images/mine.jpg"/>
    </div>
  </div>
  {/* second  parallax image*/}
    <div className="parallax-container center valign-wrapper" id="Row4">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 600 300">

  
  <symbol id="r-text">
    <text textAnchor="middle"
            x="50%" y="50%" dy=".35em">
    99 JOBS
     </text>
  </symbol>

  
   
  <use xlinkHref="#r-text" className="text"
            ></use>
  <use xlinkHref="#r-text" className="text"
            ></use>
  <use xlinkHref="#r-text" className="text"
            ></use>
  <use xlinkHref="#r-text" className="text"
            ></use>

</svg>
    <div className="parallax"><img src="/images/welder.jpg"/>
 
  </div>
  </div>
{/* footer code */}
  <Footer/>

</div>
    );
  }
}
