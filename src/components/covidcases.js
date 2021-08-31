import {Component} from "react"
import axios from "axios"
import "./covidcases.css"

class covidcase extends Component {
     state={
         data: []
     }

     componentDidMount (){
          axios.get("https://api.covid19india.org/data.json")
          .then(res=>{

              this.setState({data:res.data.statewise[0]})
          })
          .catch(err=>{
              console.log(err)
          })
     }

    render(){
        return (
        <div><h1 className="h2">CovidCases in India</h1>
        <div  className="div">
        <div className="card0">
            <div className="container">
    <h4><b>total Confirmedcases</b></h4> 
    <p className="para1"> {this.state.data.confirmed}</p> 
  </div>
</div>
        <div className="card1">
            <div className="container">
    <h4><b>active Cases</b></h4> 
    <p className="para1">{this.state.data.active}</p> 
  </div>
</div>
<div className="card2">
            <div className="container">
    <h4><b>recovered Cases</b></h4> 
    <p className="para1">{this.state.data.recovered}</p> 
  </div>
</div>
<div className="card3">
            <div className="container">
    <h4><b>Deaths</b></h4> 
    <p className="para1">{this.state.data.deaths}</p> 
  </div>
</div>
</div>
</div>)
    }


}
export default covidcase;
