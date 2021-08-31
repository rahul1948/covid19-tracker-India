import axios from "axios"
import React, {Component}  from "react"

import "./Statewisecoviddata.css"



class statewisecoviddata extends Component{
    state={
        data:[]
    }
    componentDidMount(){
        axios.get("https://api.covid19india.org/data.json")
          .then(res=>{
              this.setState({data:res.data.statewise})
          })
          .catch(err=>{
              console.log(err)
          })
    }


render(){
    return (
        <div>
            <div className="h1">
            <h2 >Statewisecoviddata India</h2>
            </div>
            <table className="customers">
                <thead>
                <tr>
                    <th>State
                    </th>
                    <th>Confirmed
                    </th>
                    <th>Active
                    </th>
                    <th>Recovered
                    </th>
                    <th>Deaths
                    </th>
                </tr>
                </thead>
                <tbody>
                    {this.state.data.map((currentvalue,index)=>{
                        if(index===0 || currentvalue.state==="State Unassigned") {
                            return false
                        }
                        else{
                        return (<tr key= {index} ><td>{currentvalue.state}</td>
                            <td>{currentvalue.confirmed}</td>
                            <td>{currentvalue.active}</td>
                            <td>{currentvalue.recovered}</td>
                            <td>{currentvalue.deaths}</td></tr>)
                        }
                    })}
                
                </tbody>
            </table>
        </div>
    )
}


}
export default statewisecoviddata;