import React, {Component} from 'react';
import ProductItem from '../Products/ProductItem';
import axios from 'axios';
// import { actFetchLaptop } from './../../action/index';
// import { connect } from 'react-redux';
// import laptops from './../../reducers/Laptops';


class BottomContentRight extends Component {

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
      
    return (
            <div className="row">

              <div className="col-sm-12">
              
                <h2>Sản Phẩm Mới <span className="label label-info">NEW</span></h2>
                <hr />
                
                  {this.state.laptops.map((item,index) => {
                      // var num1 = Math.floor(Math.random() * 10);
                      // var num2 = Math.floor(Math.random() * 10);
                      // var num3 = Math.floor(Math.random() * 10);
                      // console.log(num1);
                      // console.log(num2);
                      // console.log(num3);
                      if(index <= 2){
                        return (
                          <ProductItem key={index}
                            id={item.ID_LAPTOP}
                            img={item.IMG}
                            price={item.GIA_LAPTOP}
                            name={item.TEN_LAPTOP}
                            products={item}
                          >
                        
                      </ProductItem>
                        )
                      }
                      else {
                        return null;
                      }
                
                    })}
                  </div>
                {/**  
                <ProductItem></ProductItem>
                <ProductItem></ProductItem>
              
              
              
              <div className="col-sm-12">

                {/**   <h2>Sản Phẩm Nổi Bật <span className="label label-danger">HOT</span> </h2>
                <hr />*/}
                

                 {//this.state.laptops.map((item,index) => (
                //   <ProductItem key={index}
                //     id={item.ID_LAPTOP}
                //     img={item.IMG}
                //     price={item.GIA_LAPTOP}
                //     name={item.TEN_LAPTOP}
                //     products={item}
                //   >
                    
                //   </ProductItem>
                // ))
              }
              <div className="col-sm-12">
              
                <h2>Sản Phẩm Nổi Bật <span className="label label-danger">HOT</span> </h2>
                <hr />
                
                  {this.state.laptops.map((item,index) => {
                      // var num1 = Math.floor(Math.random() * 10);
                      // var num2 = Math.floor(Math.random() * 10);
                      // var num3 = Math.floor(Math.random() * 10);
                      // console.log(num1);
                      // console.log(num2);
                      // console.log(num3);
                      if(index <= 2 ){
                        return (
                          <ProductItem key={index}
                        id={item.ID_LAPTOP}
                        img={item.IMG}
                        price={item.GIA_LAPTOP}
                        name={item.TEN_LAPTOP}
                        products={item}
                      >
                        
                      </ProductItem>
                        )
                      }
                      else {
                        return null;
                      }
                
                    })}
                
              </div>
            </div>
          
    );
  }
}

// const mapStateTopProps = state =>{
//   return {
//     laptops : state.laptops
//   }
// }

// const mapDispatchToProps = (dispatch, props) => {
//   return  {
//     fetchAllLaptops : (laptops) => {
//       dispatch(actFetchLaptop(laptops))
//     }
//   }
// }
export default BottomContentRight;
//export default connect(mapStateTopProps, mapDispatchToProps)(BottomContentRight);


// {this.state.laptop.map(item => (
//   <h1 key={item.id_laptop} 
//     laptop={this.state.laptop}
//   ></h1>
// ))}