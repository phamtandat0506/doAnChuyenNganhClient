import axios from 'axios';
import React, {Component} from 'react';


class CartPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            cart: []
        }
      }
    

    componentDidMount(){
        // if(localStorage && localStorage.getItem('Cart')){
        //     var inCart = JSON.parse(localStorage.getItem('Cart'))
        //     this.setState({cart : inCart.cart})
        //     console.log(inCart);
        //     //  console.log("hi babe");

        axios.get('api/cart')
        .then(res => {
            const carts = res.data.cart
            console.log(res.data.products)
            this.setState({cart : carts})
            //this.props.fetchAllLaptops(res.data.laptops)
            })
            .catch(error => console.log(error));
        
    }

    truSoLuong = () => {
        var qua = this.state.cart
        console.log(qua);
        this.setState({
            
        })
    }

    price = (p) => {
        return(parseFloat(p).toLocaleString("en"));
      }

      sumPrice = () => {
        var cart = this.state.cart
        var n = 0
        var sum = 0
        cart.map((item, index) => {
        sum = sum+ item.GIA
        console.log(typeof sum)
        n = n + parseInt(item.SO_LUONG)
        console.log(n);
        })
        var price = parseFloat(sum).toLocaleString("en")
        document.getElementById("sumPrice").innerHTML = price + " vnđ, Tổng số lượng = " + n;
      }

    render(){
        var cart = this.state.cart
        console.log(cart);
        
        // var elm = cart.map((cart, index)=> {
        //     return <CartItem key={index} cart={cart}/>
        // })
        return(
            
            <div className="row">
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <h3 className="text-center">Giỏ Hàng Của Bạn</h3>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Số thứ tự</th>
                                <th>Tên sản phẩm</th>
                                {/** <th>Hình ảnh</th>*/}
                                <th>Giá</th>
                                <th>Số lượng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => {
                                
                                return(
                                    <tr key={index}>
                                        <td>{++index}</td>
                                        <td>{item.TEN_LAPTOP}</td>
                                        {/** <td>
                                            <img className="img-sz" src={`${item.IMG}`} alt="laptop"/>
                                        </td>*/}
                                        <td>{this.price(item.GIA)} vnđ</td>
                                        <td><button 
                                            onClick={this.truSoLuong = (index) => {
                                                // var qua = item.SO_LUONG
                                                // console.log(qua);
                                                // this.setState({
                                                //     qua: item.SO_LUONG+1
                                                // })
                                            }}
                                        >-</button> {item.SO_LUONG} <button>+</button></td>
                                        
                                    </tr>
                                     
                                )
                            })
                            
                        }
                           
                            
                        </tbody>
                    </table>
                    
                    <button type="button" className="btn btn-primary" onClick={this.sumPrice}>Xem tổng giá = <span id="sumPrice"></span></button>
                   <br/>
                   <p></p>
                </div>
            </div>
            
        )
    }
}
export default CartPage;
