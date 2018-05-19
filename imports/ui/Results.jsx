import React, {Component, Fragment} from 'react';

import route from '/imports/routing/router.js';

// import {Accounts} from 'meteor/accounts-base';

import loadmaterialize from './materialize.js' ;







export default class Results extends Component{



   

    render(){

        return(

            <div id="myCards">
            <div>
            <h2 className="myTitle"> Professional Service Providers</h2>
            </div>
            <br></br>
            <div className="row">
            <div className="col ">
            <a href=""><div className="card American blue growCard ">
                <div className="card-content white-text">
                  <span className="card-title">Electricians and Engineers</span>
                </div>

              </div></a>

            </div>

            <div className="col ">

            <a href=""><div className="card American blue growCard ">

              <div className="card-content white-text">

                <span className="card-title">Hair Dressers and Barbers</span>

                

              </div>

            </div></a>

          </div>

          <div className="col ">

          <a href=""> <div className="card American blue  growCard">

              <div className="card-content white-text">

                <span className="card-title">Maids and House helpers</span>

               

              </div>

            </div></a>

          </div>

        </div>

        <div className="row">

            <div className="col ">

            <a href=""><div className="card American blue growCard">

                <div className="card-content white-text">

                  <span className="card-title">Brick Layers and Carpenters</span>

                 

                </div>

              </div></a>

            </div>

            <div className="col ">

            <a href=""><div className="card American blue growCard">

              <div className="card-content white-text">

                <span className="card-title">Technicians and Gadget fixers</span>

               

              </div>

            </div></a>

          </div>

          <div className="col ">

          <a href=""><div className="card American blue growCard">

              <div className="card-content white-text">

                <span className="card-title">Tailors and Shoe repairers</span>

              </div>

            </div></a>

          </div>

        </div>

          </div>

          

        )

    }

}

