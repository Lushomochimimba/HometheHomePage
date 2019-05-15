import {Meteor} from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import {withTracker} from 'meteor/react-meteor-data';
import Navbar from '/imports/ui/components/navbar.jsx';
import Footer from '/imports/ui/components/footer.jsx';
import initailize from './materialize.js'
import { Session } from 'meteor/session';

/*===============================
    home page pagination function
=================================*/
function pagination() {

    var offset = $(document).scrollTop();
    var windowHeight = $(window).height();
    var $body = $('body');
  
    switch (true) {
      case (offset > (windowHeight * 3.75)):
        $body.removeClass().addClass('page-5');
        break;
      case (offset > (windowHeight * 2.75)):
        $body.removeClass().addClass('page-4');
        break;
      case (offset > (windowHeight * 1.75)):
        $body.removeClass().addClass('page-3');
        break;
      case (offset > (windowHeight * .75)):
        $body.removeClass().addClass('page-2');
        break;
      default:
        $body.removeClass().addClass('page-1');
     }
  }
  
  pagination();
  
  $(document).on('scroll', pagination);
  
  $(document).on('click', 'a[href^="#"]', function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
  });
/*==========================
 main(Home2) component
 ==========================*/
export default class Home2 extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div class="main">
                <section id="page1">
                    <h1>Page 1</h1>
                </section>

                <section id="page2">
                    <h1>Page 2</h1>
                </section>

                <section id="page3">
                    <h1>Page 3</h1>
                </section>

                <section id="page4">
                    <h1>Page 4</h1>
                </section>

                <section id="page5">
                    <h1>Page 5</h1>
                </section>
                </div>

                <ul id="pagination">
                <li><a href="#page1"></a></li>
                <li><a href="#page2"></a></li>
                <li><a href="#page3"></a></li>
                <li><a href="#page4"></a></li>
                <li><a href="#page5"></a></li>
                </ul>

            </div>
        )
    }
}