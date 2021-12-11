import React, {Component} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

class GamingPage extends Component {
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
        return (
    
          <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
            <h3 className="text-center">Tất cả sản phẩm</h3>
              {this.state.laptops.map((item, index) => {
                  if(item.ID_LOAI === "gm"){
                    return(
                        <div className="col-sm-3" key={index}>
                          <div className="well">
                            <Link 
                              to={"/chi-tiet/" + this.chuyenDoiURL(item.TEN_LAPTOP) + "." + item.ID_LAPTOP + ".html"}>
                              <img className="img-responsive chain" src={`${item.IMG}`}/>
                            </Link>
                            <div className="grid-chain-bottom txt-size">
                              <h6>
                                <Link 
                                  to={"/chi-tiet/" + this.chuyenDoiURL(item.TEN_LAPTOP) + "." + item.ID_LAPTOP + ".html"}>
                                  {item.TEN_LAPTOP}
                                </Link>
                              </h6>
                              <div className="star-price">
                                <div className="dolor-grid"> 
                                    <span className="actual">{this.giaTien(item.GIA_LAPTOP)}vnđ</span>
                                </div>
                                <Link to={"/chi-tiet/" + this.chuyenDoiURL(item.TEN_LAPTOP) + "." + item.ID_LAPTOP + ".html"} className="tag-a">Chi tiết sản phẩm</Link>
                                <div className="clearfix"> </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                  }else {
                      console.log("Null");
                  }
                
              })}
    
            </div>
        );
      }
}

export default GamingPage;