import React, { Component } from 'react';

class Nav extends Component{


   render(){
      return(
         <div className="navbar row" id="nav">
            <div className="col-md-12">
               <ul className="nav justify-content-end">
                  <li>
                     <a href="#">DIRECTORIO DE TIENDAS</a>
                  </li>
                  <li>
                     <a href="#">SERVICIO AL CLIENTE</a></li>
                  <li>
                     <a href="#">MI CUENTA</a>
                  </li>
               </ul>
            </div>
         </div>
      );
   }
}

export default Nav;