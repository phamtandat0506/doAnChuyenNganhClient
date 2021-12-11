import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {


  chuyenDoiURL = (str) => {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();     
 
    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
 
    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');
 
    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');
 
    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');
 
    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');
 
    // return
    return str;
  }

  giaTien = (flo) => {
    return(flo.toLocaleString("en"))
}

  render() {

    var id = this.props.id
    var  img  = this.props.img
    var price = this.props.price
    var name = this.props.name
    //console.log(this.props.products)

    
    return (
        <div className="col-sm-4">
            <div className="well">
              <Link to={"/chi-tiet/" + this.chuyenDoiURL(name) + "." +id+ ".html"}><img className="img-responsive chain" src={`${img}`}/></Link>
              <div className="grid-chain-bottom txt-size"> 
                <h6><Link to={"/chi-tiet/" + this.chuyenDoiURL(name) + "." +id+ ".html"}>{name}</Link></h6>
                <div className="star-price">
                  <div className="dolor-grid"> 
                      <span className="actual">{this.giaTien(price)}vnđ</span>
                  </div>
                <Link to={"/chi-tiet/" + this.chuyenDoiURL(name) + "." +id+ ".html"} className="tag-a">Chi tiết sản phẩm</Link>
                <div className="clearfix"> </div>
                </div>
            </div>
            </div>
        </div>
    );
  }
}

export default ProductItem;