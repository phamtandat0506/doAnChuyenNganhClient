import axios from 'axios';
import React, {Component} from 'react';
import { Link } from "react-router-dom";

class TopDetail extends Component {

  constructor(props){
    super(props);
    this.state = {
     cart : []
    }
  }

  componentDidMount() {
    this.setState({
      cart : this.props
    })
    
  }

  price = (p) => {
    //console.log(p.toLocaleString("en"))
    return(parseFloat(p).toLocaleString("en"));

    // return(p.format({format:"#,###", locale:"us"}));
  }
  
  addToCart = () => {
    //console.log(this.state);
    //localStorage.setItem('Cart', JSON.stringify(this.state))
    const newCart = {
      nameLaptop: this.props.nameLaptop,
      price : this.props.price,
      quality: this.props.quality,
      idLaptop: this.props.idLaptop
    }
    console.log(newCart);
    axios.post('http://localhost:4000/cart/api/insert', newCart)
    .then(res => {
      alert("Thêm vào giỏ thành công!")
      let cart = this.state
      cart = [newCart,...cart]
      this.setState({cart : cart})
    })
    .catch(error => console.log(error));
  }

  render() {

    var {price} = this.props
    console.log(this.state);

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
                <Link to="/gio-hang" className="tag-a"><span className="glyphicon glyphicon-shopping-cart" /> Giỏ Hàng</Link>
                {/**<a href className="tag-a"><span className="glyphicon glyphicon-shopping-cart" /> Xem giỏ hàng</a> */}
                <br />
                <button 
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