import React, { Component } from "react";
import LapTopList from "../Component/ManagerProduct/LaptopList";
import axios from "axios";

class ManagerLaptopPage extends Component {

    constructor(props){
        super(props)
        this.state = {
          laptops : []
        }
      }

      componentDidMount() {
        axios.get('/api/laptop')
                .then(res => {
                const laptop = res.data.products
                //console.log(res.data.products)
                this.setState({laptops : laptop})
                //this.props.fetchAllLaptops(res.data.laptops)
                })
                .catch(error => console.log(error));
        }

    render(){
        var {laptops} = this.state
        return(

            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                
                <button type="button" className="btn btn-info">Thêm Laptop</button>
                
                        <LapTopList 
                        
                    ></LapTopList>
                 
               

            </div> 

        )
    }
}

export default ManagerLaptopPage;