import React, {Component, Fragment} from 'react';

import {withTracker} from 'meteor/react-meteor-data';

import route from '/imports/routing/router.js';

import Infoz from '../api/UserInfo/collections.js';

// import {Accounts} from 'meteor/accounts-base';

import loadmaterialize from './materialize.js' ;

import {SignUp} from './SignUp.jsx';

import Navbar from '/imports/ui/components/navbar.jsx';











export class UserAccount extends Component{









    getUserInfo(){

        const infoz = this.props.infoz;



        if(infoz == undefined){

             return null;

        }



        console.log("smhdfkagsdfk")

        return infoz.map((info) => (

             

            <div key ={info._id}>

            <Navbar/>

                {/* <div className="row">

            <div className="center">

             <div className="center">

                 <h4>{info.name}</h4>

                 <p id="center">{info.profession}</p>

                 <p id="center"><i className="fa fa-phone" aria-hidden="true"></i> {info.phonenumber}</p>

                 <p id="center"><i className="fa fa-envelope" aria-hidden="true"></i> {info.email}</p>

                 <p id="center"><i className=" 	fa fa-user-circle-o"></i> {info.gender}</p>  

                 <h4>DESCRIPTION</h4>               

                 <p id="center"> {info.description}</p>

             </div>

            </div>

            </div>  */}
                  <div className="row userprofile-row">      
                <div class="user-profile">
                    <img class="avatar" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTF_erFD1SeUnxEpvFjzBCCDxLvf-wlh9ZuPMqi02qGnyyBtPWdE-3KoH3s" alt="Ash" />
                    <div class="username">{info.name}</div>
                <div class="bio">
                    {info.profession}
                    
                </div>
                    <div class="description">
                    {info.description}
                </div>
                <ul class="data">
                    <li>
                    <span class="entypo-heart"> Likes</span>
                    </li>
                    <li>
                    <span class="entypo-eye"> stars</span>
                    </li>
                    <li>
                    <span class="entypo-user"> dislikes</span>
                    </li>
                </ul>
                </div>
                </div>
            </div>

            

        )

    );  

    }







    logOut=(e)=>{

    e.preventDefault();

    Meteor.logout();

    route.go('/login')

  }

//   deleteAccount=(e,id)=>{

//       Meteor.call('infoz.deleteAccount',id)

//   }

   

      render() {

        if(Meteor.user()){

        return (

        <div>    



       

        {/* <button type="Primary" className="btn btn-primary delete" onClick={e =>this.deleteAccount(e,info._id)}>

Delete Account 

</button> */}

        {this.getUserInfo()}

        

           </div>

                 

        )

    }

    else{

        return(

            route.go('/')

    )} 

    }

}



export default withTracker(() => {

    Meteor.subscribe('users');

    Meteor.subscribe('infoz');
    const email = route.current().queryParams.email;
     return {
         infoz : Infoz.find({email:email}).fetch(),
     };
 })(UserAccount);

