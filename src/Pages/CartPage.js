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

        axios.get('api/cart')
        .then(res => {
            const carts = res.data.cart
            console.log(res.data.products)
            this.setState({cart : carts})
        })
        .catch(error => console.log(error));

        
        
    }

    truSoLuong = () => {
        var qua = this.state.cart
        console.log(qua);
        this.setState({
            
        })
    }

    price = (p, q) => {
        var pr = p * q
        return(parseFloat(pr).toLocaleString("en"));
      }

    sumPrice = () => {
        var cart = this.state.cart
        var n = 0
        var sum = 0
        cart.map((item, index) => {
        sum = sum+ (item.GIA * item.SO_LUONG)
        console.log(typeof sum)
        n = n + parseInt(item.SO_LUONG)
        console.log(n);
        })
        var price = parseFloat(sum).toLocaleString("en")
        document.getElementById("sumPrice").innerHTML = price + " vnđ.";
    }



    handleDelete = (item) => {
        const idLaptopNew = {
            ID_LAPTOP : item.ID_LAPTOP
        }
        if(confirm('Bạn chắc chắn muốn xóa không? ')){//eslint-disable-line
            axios.post('http://localhost:4000/cart/api/delete', idLaptopNew)
            .then(res => {
                this.setState(prevState => ({
                    cart: prevState.cart.filter(elm => elm.ID_LAPTOP !== item.ID_LAPTOP)
                }));
                alert("Xóa Thành Công!")
                
            })
            .catch(err => console.log(err))
        }
    }

    addCartItem = (soLuong, id) => {
        if(soLuong > 0){
            var sl = ++soLuong
            // console.log(sl);
            const cartItemNew = {
                ID_LAPTOP: id,
                SO_LUONG: sl
            }

            axios.post('http://localhost:4000/cart/api/update', cartItemNew)
            .then(res => {
                var key = id
                this.setState(prevState => ({
                    cart: prevState.cart.map(
                        elm => elm.ID_LAPTOP == key ? {
                            ...elm,
                            SO_LUONG: sl,
                            ID_LAPTOP: id
                        }:elm
                    )
                }))
            })
            .catch(error => console.log(error));
        }
    }

    apartCartItem = (soLuong, id, item) => {
        if(soLuong > 1){
            var sl = --soLuong
            //console.log(sl);
            const cartItemNew = {
                ID_LAPTOP: id,
                SO_LUONG: sl
            }

            axios.post('http://localhost:4000/cart/api/update', cartItemNew)
            .then(res => {
                var key = id
                this.setState(prevState => ({
                    cart: prevState.cart.map(
                        elm => elm.ID_LAPTOP == key ? {
                            ...elm,
                            SO_LUONG: sl,
                            ID_LAPTOP: id
                        }:elm
                    )
                }))
            })
            .catch(error => console.log(error));
        }else{
            //console.log("sl <= 1");
            
            const cartItemNew = {
                ID_LAPTOP: id
            }
            
            if(confirm('Bạn chắc chắn muốn xóa không? ')){//eslint-disable-line
                axios.post('http://localhost:4000/cart/api/delete', cartItemNew)
                .then(res => {
                    this.setState(prevState => ({
                        cart: prevState.cart.filter(elm => elm.ID_LAPTOP !== item.ID_LAPTOP)
                    }));
                    alert("Xóa Thành Công!")
                    
                })
                .catch(err => console.log(err))
            }
        }
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
                                <th></th>
                                <th>Số thứ tự</th>
                                <th>Tên sản phẩm</th>
                                {/** <th>Hình ảnh</th>*/}
                                <th>Giá</th>
                                <th>Số lượng</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => {
                                
                                return(
                                    <tr key={index}>
                                   {/* <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onClick={this.sumPrice} ></input>*/}
                                        <td>{++index}</td>
                                        <td>{item.TEN_LAPTOP}</td>
                                        {/** <td>
                                            <img className="img-sz" src={`${item.IMG}`} alt="laptop"/>
                                        </td>*/}
                                        <td>{this.price(item.GIA, item.SO_LUONG)} vnđ</td>
                                        <td>
                                            <button 
                                                type="button"
                                                className="btn btn-primary"
                                                onClick={() => this.apartCartItem(item.SO_LUONG, item.ID_LAPTOP, item)}
                                            >-</button>
                                            
                                            <span id="br-pr"> {item.SO_LUONG} </span>
                                            
                                            <button 
                                                type="button" 
                                                className="btn btn-primary"
                                                onClick = {() => this.addCartItem(item.SO_LUONG, item.ID_LAPTOP)}
                                            >+</button>
                                        </td>
                                        <td>
                                            <button 
                                                type="button" 
                                                className="btn btn-danger"
                                                onClick={() => this.handleDelete(item)}
                                            >Xóa</button>
                                        </td>
         
                                    </tr>
                                     
                                )
                            })
                            
                        }
                           
                            
                        </tbody>
                    </table>
                    
                        <button type="button" className="btn btn-primary" onClick={this.sumPrice}>Xem tổng giá = <span id="sumPrice"></span></button>
                        
                        <br/>
                    <p></p>
                    <div>
                        <p id="sumPrice"></p>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default CartPage;
