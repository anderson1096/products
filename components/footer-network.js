import React, { Component } from 'react';

class FooterNetwork extends Component{

   render(){
      return(
         <div className="navbar row text-center" id="footer-network">
            <div className="col-md-12">
               <h1>@HUSHPUPPIESCO</h1>
               <div id="social-logo-div">
                  <img id="social-logo" src="../public/img/social.png"/>
               </div>
            </div>
         </div>
      );
   }
}

export default FooterNetwork;