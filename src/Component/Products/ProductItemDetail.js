import React, {Component} from "react";
import { Link } from "react-router-dom";


class ProductItemDetail extends Component {
    render() {
        
        return (

            <div className="col-sm-3">
                <div className="well">
                <Link to="/chi-tiet-san-pham"><img className="img-responsive chain" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX7NcL9MISEcL245c30NCLH-Lo1GpvUeaQDQ&usqp=CAU" alt=" " /></Link>
                <div className="grid-chain-bottom"> 
                    <h6><Link to="/chi-tiet-san-pham">Lorem ipsum dolor</Link></h6>
                    <div className="star-price">
                    <div className="dolor-grid"> 
                        <span className="actual">20.000.000vnđ</span>
                    </div>
                    <Link to="/chi-tiet-san-pham" className="tag-a">Chi tiết sản phẩm</Link>
                    <div className="clearfix"> </div>
                    </div>
                </div>
            </div>
        </div>

        );
    }
}
export default ProductItemDetail;