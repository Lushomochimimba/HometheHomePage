import React, {Component, Fragment} from 'react';
import route from '/imports/routing/router.js';
// import {Accounts} from 'meteor/accounts-base';
import loadmaterialize from './materialize.js' ;




export default class UserAccount extends Component{
   
      render() {
        return <div>    
             <div class="row">
              <div class="col s3">
              <img src={this.props.url} />

              <input type="file"/>
               <img className="materialboxed" width="200" height="200" src="/images/profile.jpeg"/>
              </div>
            <div class="col s5">
             <span>
                 <h4>Emeritus E.</h4>
                 <p>Plumber</p>
                 <p><i class="fa fa-phone" aria-hidden="true"></i> +72865837678379</p>
                 <p><i class="fa fa-envelope" aria-hidden="true"></i> example@gmail.com</p>
             </span>
            </div>
            </div>
            

{/* expertise and personal details */}
             <div class="row">
 
<div class="col s6">
<h4>Expertise</h4>
</div>
<div class="col s6">
<h4>Personal Details</h4>

</div>
</div>


           </div>
                 

        
    }
}