import React, {Component} from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
    render () {
        return (
            <nav className="navbar navbar-inverse bgr-blue">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />                        
                        </button>
                        <Link className="navbar-brand fs-50" to="/"> Đ.DellShop </Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                        <li><Link to="/"><i className="fas fa-home" /> Trang chủ</Link></li>
                        <li><Link to="/san-pham"><i className="fas fa-headset" /> Sản Phẩm</Link></li>
                            <ul className="dropdown-menu"><span className="caret" />
                                <li><Link to="/san-pham"><i className="fas fa-headset" /> Gaming</Link></li>
                                <li><Link to="/san-pham"><i className="fas fa-feather" /> Mỏng Nhẹ</Link></li>
                                <li><Link to="/san-pham"><i className="fas fa-briefcase" /> Văn Phòng</Link></li>
                                <li><Link to="/san-pham"><i className="fas fa-laptop-code" /> Kỹ Thuật &amp; Đồ Họa</Link></li>
                            </ul> 
                            
                            
                            <li><Link to="/quan-ly-laptop"><i className="fab fa-servicestack" /> Quản Lý Laptop</Link></li>
                            <li><Link to="/quan-ly-loai"><span className="glyphicon glyphicon-edit" /> Quản Lý Loại Laptop</Link></li>
                            <li><Link to="/gio-hang"><span className="glyphicon glyphicon-shopping-cart" /> Giỏ Hàng</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to=""><span className="glyphicon glyphicon-user" /> Đăng Ký</Link></li>
                            <li><Link to=""><span className="glyphicon glyphicon-log-in" /> Đăng Nhập</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Menu;