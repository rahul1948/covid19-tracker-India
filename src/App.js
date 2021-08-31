import './App.css';
import Header from "./components/header"
import Carousel from './components/carousel';
import React, {Component} from 'react';
import Covidcase from "./components/covidcases"
import Statewisecoviddata from './components/Statewisecoviddata';
import Indianmap from "./components/indianmap"
import Footer from "./components/Footer"
class app extends Component{

    render(){
  return (
    <div  className="App">
      <Header/>
      
     <Carousel/>
     <div className ="text">
     <h2 className="h1">Data & Statistics</h2>
     <p className="p"> The body of the data and statistics contains three section.First section contains the data about different kind of covid cases in india
     such as total confirmed ,active ,recovered cases and death figures.The second section has the information about different kind of covid cases statewise in india .
     while third section shows the representation of total confirmed cases on a map of india. The second wave of covid in india brought 
       unprecedented losses to our nation. This  provides right kind of information to the user & helping them to measure the all kinds of 
       cases.
     </p>
     </div>
     <Covidcase/>
      <Statewisecoviddata/>
      <h2 className="h2">Representation of confirmed covidcases on each state of india</h2>
      <Indianmap/> 
      <div className="footer">
      <Footer/>
      </div>
      
    </div>

  );
}
}

export default app;
