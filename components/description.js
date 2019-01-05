import React, { Component } from 'react';

class Description extends Component{
  
   render(){
      return(
         <div className="row">
            <div style={{ marginLeft: "52px", marginRight: "52px"}} className="col-md text-justify" >
               <br></br>
               <p style={{ color: "gray", fontWeight: "lighter"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque eleifend arcu quis tristique. Praesent id ligula ut tellus congue accumsan. Donec ac sodales sem. Suspendisse ac odio aliquam, interdum risus quis, suscipit ligula. Quisque lacus odio, tincidunt ac nunc vehicula, cursus lobortis nisi. Sed iaculis tortor non nibh aliquam, vehicula fringilla massa lacinia. Duis molestie convallis ante, nec convallis felis rhoncus eu. Vivamus ultrices vitae sem sed tincidunt. Phasellus in pulvinar odio. Donec tristique lacinia justo, a rhoncus mauris pulvinar vitae. Donec vehicula sem sed iaculis elementum.</p>
            </div>
         </div>
      );
   }
}

export default Description;