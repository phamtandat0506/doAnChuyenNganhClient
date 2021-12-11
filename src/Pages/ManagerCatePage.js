import React, { Component } from "react";
import CategoryList from "../Component/ManagerCate/CategoryList";
import axios from "axios";

class ManagerCatePage extends Component {

    constructor(props){
        super(props)
        this.state = {
          loais : []
        }
      }

      componentDidMount() {
        axios.get('/api/loai')
                .then(res => {
                const loais = res.data.loais
                //console.log(res.data.loais)
                this.setState({loais : loais})
                //this.props.fetchAllLaptops(res.data.laptops)
                })
                .catch(error => console.log(error));
        }

    render(){
        //var {laptops} = this.state
        return(

            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                
                <button type="button" className="btn btn-info">Thêm Laptop</button>
                
                    <CategoryList></CategoryList>
                 
               

            </div> 

        )
    }
}

export default ManagerCatePage;