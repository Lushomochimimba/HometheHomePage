import {Meteor} from 'meteor/meteor';
import React, {Component, Fragment} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import route from '/imports/routing/router.js';
import Infoz from '../api/UserInfo/collections.js';
// import {Accounts} from 'meteor/accounts-base';
import loadmaterialize from './materialize.js';
import {SignUp} from './SignUp.jsx';
import Navbar from '/imports/ui/components/navbar.jsx';




export class Cards extends Component{


    getUserInfo(){
        const infoz = this.props.infoz;

        // if(infoz == undefined){
        //      return null;
        // }

        console.log("smhdfkagsdfk")
        return infoz.map((info) => (
             
            <div key ={info._id}>
           <div className="row>">
                 <div className="column">
               <div className="card">
     <div className="card-image waves-effect waves-block waves-light">
       <img className="activator" src="images/profile.jpeg"/>
     </div>
     <div className="card-content">
       <span className="card-title activator grey-text text-darken-4"><b>Name:</b> {info.name}<i className="fa fa-ellipsis-v right"></i></span>
       <span className="card-title activator grey-text text-darken-4"><b>Profession:</b> {info.profession}</span>
       <span className="card-title activator grey-text text-darken-4"><b>Contact:</b> {info.phonenumber}</span>
       <span className="card-title activator grey-text text-darken-4"><b>Email:</b> {info.email}</span>
     </div>
     <div className="card-reveal">
       <span className="card-title grey-text text-darken-4">{info.profession}<i className="fa fa-times right"></i></span>
       <p>{info.description}</p>
     </div>
   </div>
   </div>
  </div>
            </div> 
    
            
        )
    );  
    }


    render(){
        return(


            <div>
            <Navbar/>
              <div className="row">
         {this.getUserInfo()}
         </div>
              </div>
        )
    }
  }
export default withTracker(() => {
  Meteor.subscribe('users');
  
  Meteor.subscribe('infoz');
  const email = route.current().queryParams.email;
   return {
       infoz : Infoz.find({}).fetch(),
   };
})(Cards);

// }
