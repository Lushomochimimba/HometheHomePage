import React, {Component, Fragment} from 'react';
import route from '/imports/routing/router.js';
// import {Accounts} from 'meteor/accounts-base';
import loadmaterialize from './materialize.js'



export default class Cards extends Component{


    render(){
        return(


            <div>

                <div className="row>">
                <div className="column">
                <div className="card">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src="http://ipce-csip.com/wp-content/uploads/2018/02/5-1.jpg"/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">Jane Doe<i class="fa fa-ellipsis-v right"></i></span>
      <p><a href="#">Connect</a></p>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">Plumber<i class="fa fa-times right"></i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
  </div>
  </div>

              </div>
        )
    }
}
