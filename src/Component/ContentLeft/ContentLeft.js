import React from 'react';
import { Link } from 'react-router-dom';

function LeftMenu() {

  
  
    return (
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className="list-group img mrl-5 mr-10 mr-top">
                <Link className="list-group-item" to=""><i className="fas fa-laptop" /> Loại Laptop</Link>
                <Link to="/san-pham-gaming" className="list-group-item"><i className="fas fa-headset" /> Gaming</Link>
                <Link to="/san-pham-inspiron" className="list-group-item"><i className="fas fa-feather" /> Inspiron</Link>
               {/** <Link to="/sanpham" className="list-group-item"><i className="fas fa-briefcase" /> </Link> */}
                <Link to="/san-pham-vostro" className="list-group-item"><i className="fas fa-laptop-code" />  Vostro</Link>
            </div>
            <div className="col-sm-12">
            
            </div>
        </div>
    );
  
}
export default LeftMenu;