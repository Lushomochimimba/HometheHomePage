import {Meteor} from 'meteor/meteor';
import React, { Component } from 'react';



export default class Footer extends Component {


  render() {
    return (
      <div>
          <footer className="page-footer orange col s6">
  <div className="container">
    <div className="row">
      <div className="col l6 s12">
        <h5 className="white-text">Project Bio</h5>
        <hr/>
        
        <p className="grey-text text-lighten-4">
          We are a team of upcoming developers from Hackers Guild working on this project like it's our full time job. Any amount of your support will help continue on the development of this project and we greatly appreciate.
        </p>
      </div>
      <div className="col l3 s12">
        <h5 className="white-text"></h5>
      </div>
      <div className="col l3 s12">
        <h5 className="white-text">Developers</h5>
        <hr/>
        <ul>
          <li>
            <a href="#!" className="grey-text text-lighten-3">   Lushomo Chimimba  <i className="fa fa-github"></i></a>
          </li>
          <li>
            <a href="#!" className="grey-text text-lighten-3"> Sithembinkhosi Siwo  <i className="fa fa-github"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="footer-copyright">
    <div className="container">
      © 2018 Copyright of 99JOBS
    </div>
  </div>
</footer>
      </div>

    );
  }
}
