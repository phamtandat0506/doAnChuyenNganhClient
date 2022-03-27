import axios from 'axios';
import React, {Component} from 'react';
import { Link } from "react-router-dom";

class TopDetail extends Component {

  constructor(props){
    super(props);
    this.state = {
     cart : [],
     cartItem: []
    }
  }

  componentDidMount() {
    this.setState({
      cart : this.props
    })
    
    axios.get('/chi-tiet/api/cart')
    .then(res => {
      const carts = res.data.cart
      //console.log(res.data.cart)
      this.setState({cartItem : carts})
      //this.props.fetchAllLaptops(res.data.laptops)
    })
    .catch(error => console.log(error));

    axios.get('api/cart')
        .then(res => {
            const carts = res.data.cart
            console.log(res.data.products)
            this.setState({cart : carts})
        })
        .catch(error => console.log(error));
    
  }

  componentWillReceiveProps() {
    
  }

  price = (p) => {

    return(parseFloat(p).toLocaleString("en"));

  }
  
  handle = () => {
 
  }

  addToCart = () => {
    
    var cartItem = this.state.cartItem
    
    var id = this.props.idLaptop
    var myItem = cartItem.find(function (myItem) {
      //console.log(myItem);
      return myItem.ID_LAPTOP === id
    })
    var flag = false
    var a
    //console.log(myItem.SO_LUONG);
    if(myItem === a){
      flag = false
    }else{
      flag = true
    }
    var quali = ++myItem.SO_LUONG
    //console.log(quali);
    
    if(flag === true){
      //alert("Sản Phẩm Này Đã Có Trong Giỏ. Hãy Đến Giỏ Hàng!")
      const cartItemNew = {
        SO_LUONG: quali,
        ID_LAPTOP: myItem.ID_LAPTOP
      }
      console.log(cartItemNew);
      axios.post('http://localhost:4000/cart/api/update', cartItemNew)
      .then(res => {
        var key = this.props.ID_LAPTOP
      alert("Thêm vào giỏ thành công!")
      //let cart = this.state
      //cart = [cartItemNew,...cart]
        this.setState(prevState => ({
          cart: prevState.cart.map(
              elm => elm.ID_LAPTOP == key ? {
                  ...elm,
                  SO_LUONG: quali,
                  ID_LAPTOP: this.props.ID_LAPTOP
              }:elm
          )
      }))
    })
    .catch(error => console.log(error));
      //document.getElementById('link').style.display = 'block'
    }else{
      const newCart = {
        nameLaptop: this.props.nameLaptop,
        price : this.props.price,
        quality: this.props.quality,
        idLaptop: this.props.idLaptop
      }
      //console.log(newCart);
  
  
      axios.post('http://localhost:4000/cart/api/insert', newCart)
      .then(res => {
        alert("Thêm vào giỏ thành công!")
        let cart = this.state
        cart = [newCart,...cart]
        this.setState({cart : cart})
      })
      .catch(error => console.log(error));
      //alert("Được, Chúng Tôi Sẽ Thêm Cho Bạn Vào Giỏ. Hãy Đến Giỏ Hàng Để Xem!")
      //document.getElementById('btn').style.display = 'block'
    }
    
  }

  render() {

    var {price} = this.props
    //var cartItem = this.state.cartItem
    //console.log(this.state);

    return (
        
        <div className="col-sm-7 brl">
          <ul className="list-sty">
            <li className="bold-txt">Giá: </li>
            <li className="price-sty">{this.price(price)} vnđ</li>
            <li>
                <table className="table table-hover br">
                <thead>
                    <tr className="br-grey">
                      <th>Khuyến mãi</th>
                      <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>
                        <p><span className="badge">1</span> Balo Laptop Dell</p>
                        <p><span className="badge">2</span> Tặng thẻ cào 200,000đ khi mua Combo Laptop/PC + Office H&amp;S 2021</p>
                        <p><span className="badge">3</span> Giảm thêm 5% khi mua cùng sản phẩm bất kỳ có giá cao hơn</p>
                    </td>
                    </tr>
                </tbody>
                </table>
                
                  <button type="button" id='btn' className="btn btn-info" onClick={this.handle}>Có thể thêm sản phẩm này vào giỏ?</button>
                
                <Link id='' to="/gio-hang" className="tag-a"><span className="glyphicon glyphicon-shopping-cart" /> Giỏ Hàng</Link>
                {/**<a href className="tag-a"><span className="glyphicon glyphicon-shopping-cart" /> Xem giỏ hàng</a> */}
                <br/>
                <div id='result'></div>
                
                <button 
                  id=''
                  type="button" 
                  className="btn btn-success mrl-10"
                  onClick= {this.addToCart}
                >Mua Ngay</button>
            </li>
          </ul>
        </div>
    );
  }
}
export default TopDetail;