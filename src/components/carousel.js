import React  from "react"
import {Carousel} from "react-bootstrap"
// import 'bootstrap/dist/css/bootstrap.min.css';
import image3 from "../images/newimage2.jpg"
import image2 from "../images/image2.jpg"
import image1 from "../images/image7.jpg"
import image4 from "../images/newimage.jpg"
import image5 from "../images/newimage3.jpg"
import "./slider.css"

const carousel =()=>{
    return (
        <div className="slider">
        <Carousel fade="true" >
            <Carousel.Item>
                <Carousel.Caption><h1>Stay Home,Stay Safe!</h1></Carousel.Caption>
                <img src ={image1} alt ="img1" height="400px" width="100%" />
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption><h1 className="h4">An elderly woman with suspected covid symtoms was found on footpath 
                    near Sassoon hospital in Pune Doctors & health officials take her to hospital after
                    they got call via 108 emergency service</h1></Carousel.Caption>
                <img src ={image2} alt ="img1" height="400px" width="100%" />
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption><h2>Sanitation workers being feliciated by GHMC as COVID19 frontline workers by distributing essential commodities gifts sanitation kits
                     near the historic Charminar in Hyderabad</h2></Carousel.Caption>
                <img src ={image3} alt ="img1" height="400px" width="100%" />
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption><h1>Street Vendor is selling masks in Banaras(U.P)</h1></Carousel.Caption>
                <img src ={image4} alt ="img1" height="400px" width="100%" />
            </Carousel.Item>
            <Carousel.Item>
                
                <img src ={image5} alt ="img1" height="400px" width="100%" />
                <Carousel.Caption><h2>Benificiaries wait to receive COVID19 vaccine dose at a Community Hall in Ahmedabad</h2></Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    )
}
export default carousel;