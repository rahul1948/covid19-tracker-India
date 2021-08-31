import React from "react"
import "./header.css"
import  img1 from "../images/small3.jpg"
 function header() {
     return(
         <div className="header">
             <header className="para"><img className="img" src={img1} alt="fi"/>
                 <div className="div1">Covid Trackerapp India</div>
                 
                              
             </header>
         </div>
     )
}

export default header;

