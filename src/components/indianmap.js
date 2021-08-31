import axios from "axios";
import React,{Component} from "react";
import { VectorMap } from "react-jvectormap";
class maps extends Component{
    state={
        data:[]
    }
    
    
 componentWillMount(){
     let a=[];
     
    axios.get("https://api.covid19india.org/data.json")
          .then(res=>{
              
              this.setState({data:res.data.statewise})
              this.state.data.map((currentvalue,index)=>{
                if(index===0 || currentvalue.state==="State Unassigned") {
                    return false
                }
                else{
                return (a.unshift({"code":`IN-${currentvalue.statecode}`,"value":currentvalue.confirmed}))
                }
            })
            this.setState({data:a})

          })
          .catch(err=>{
              console.log(err)
          })
         
     
 }
 
 getdata=(key)=> {
var countryData = [];
this.state.data.forEach(function(obj){
countryData[obj.code] = obj.value;
});
return countryData[key];
}
 getalldata=()=> {
var countryData = [];
this.state.data.forEach(function(obj){
countryData[obj.code] = obj.value;
});
return countryData;
}
// getdata(key) is function that maps code to the value of array (JSON)and it return only value specific state code
 handleshow2 = (e, el, code) => {
       return(el.html(el.html() +  `<br> total case: ${this.getdata(code)}`))
 
}
//on hover on state, it call getdata(with state code) and display it on screen
 IndiaMap = () => {
  return (
    <div>
      <VectorMap
        map={"in_mill"}
        backgroundColor="transparent"
        focusOn={{
          x: 0.5,
          y: 0.5,
          scale: 0,
          animate: false
        }}
        zoomOnScroll={true}
        containerStyle={{
        width: "100%",
        height: "500px"
        }}
        // onRegionClick={} //gets the country                         code
        onRegionTipShow={this.handleshow2}
        containerClassName="map"
        regionStyle={{
          initial: {
             fill: "#e4e4e4",
             "fill-opacity": 0.9,
             stroke: "none",
             "stroke-width": 0,
             "stroke-opacity": 0
          },
          hover: {
             "fill-opacity": 0.8,
             cursor: "pointer"
          },
          selected: {
             fill: "#2938bc" // onclick colour of state
          },
        }}
        regionsSelectable={false}
        series={{
           regions: [
               {
                values: this.getalldata(), //can be directly served //with api response or any data
                scale: ['#C8EEFF', '#0071A4'], //color range
                normalizeFunction: "polynomial"
               }
           ]
        }}
/>
</div>
  );
};
render(){
    return (this.IndiaMap())
}
}
export default maps