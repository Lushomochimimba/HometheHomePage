import React, {Component, Fragment} from 'react';

import route from '/imports/routing/router.js';

import {withTracker} from 'meteor/react-meteor-data';

import Categories from '../api/UserInfo/collections.js';

// import {Accounts} from 'meteor/accounts-base';

import loadmaterialize from './materialize.js' ;

import { Session } from 'meteor/session';

import Navbar from '/imports/ui/components/navbar.jsx';







export class Results extends Component{

  

    getHandler=()=>{

      session.get('categoryName')

    }



    getSessionHandler=(e)=>{

      const key = e.target.id

      console.log(key);

      

        const categ = Categories.findOne({_id:key});

        console.log(JSON.stringify(categ));

        Session.set('categoryName',categ.name);

        route.go('/cards')

        // getSessionHandler=(e)=>{

        //   const key = e.target.id

        //   console.log(key);

        //     $(".container").on('click', (e)=> {

        //     const categ = Categories.findOne({_id:key});

        //     console.log(JSON.stringify(categ));

        //     Session.set('categoryName',categ.name);

        //     route.go('/cards') 

        //     });

        //     $(".card American blue growCard col s12 m4").on('click', (e)=> {

        //       const categ = Categories.findOne({_id:key});

        //       console.log(JSON.stringify(categ));

        //       Session.set('categoryName',categ.name);

        //       route.go('/cards') 

        //       });

        //       $(".card-content white-text").on('click',(e)=> {

        //         const categ = Categories.findOne({_id:key});

        //         console.log(JSON.stringify(categ));

        //         Session.set('categoryName',categ.name);

        //         route.go('/cards') 

        //         });

        //         $(".card-title").on('click', (e)=> {

        //           const categ = Categories.findOne({_id:key});

        //           console.log(JSON.stringify(categ));

        //           Session.set('categoryName',categ.name);

        //           route.go('/cards') 

        //           });

        //         }

    

        

 };

  displayHandler=()=>{

    const categories = this.props.categories;                            

         return( this.props.categories.map((category) => (

             <div  className="" onClick={this.getSessionHandler} key ={category._id}>

                    <div  id={category._id} className="card row  col s12 m4 growCards">

                        <div id={category._id}className="card-content ">

                          <span id={category._id} className="card-title">{category.name}</span>

                        </div>

                    </div>

             </div> 



         )

         )

    );  

    }



 render(){

    console.log(this.props.dataReady);

    if(this.props.dataReady === undefined){

      return <div>still not defined</div>

    } else {  

      console.log(this.props.dataReady)      

      return(

            <div>

                <Navbar/>

                

                <div className="row">

            {this.displayHandler()}

            </div>

            </div>)

    }

  }

}



export default withTracker(() => {

      Meteor.subscribe('categories');
      Meteor.subscribe('infoz');
      Meteor.subscribe('users');
      const dReady =  Meteor.subscribe('categories');

   return {
    categories : Categories.find({}).fetch(),
    dataReady: dReady.ready(),

   };

})(Results);