import React from "react"
import "./Footer.css"
const Footer =()=>{
  return (<div className="contain">
      <div className="row">
          <h3>Services</h3>
          <ul>
              <li><a href="#">Education</a></li>
              <li><a href="#">Technology</a></li>
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">Renewable Energy</a></li>
          </ul>
          </div>
          <div className="row">
          <h3>About</h3>
          <ul>
              <li><a href="#">Our Projects</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Careers</a></li>
          </ul>
          </div>
             <div className="row">
          <h3>Contact</h3>
          <ul>
              <li><a href="#">Mobile:9294676813</a></li>
              <li><a href="#">Email:rahuly5425@gmail.com</a></li>
            
          </ul>
          </div>
        <div className="row">
            <h3 className="h3">Follow US</h3>
            <ul className="row2"> 
                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
            </ul>
        </div>
             <hr/>
        <p className="p3">Looking forward to build deep meaningful relationship</p>
            </div>)
}

export default Footer;