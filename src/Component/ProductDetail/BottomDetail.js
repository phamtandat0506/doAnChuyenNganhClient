import React, {Component} from 'react';
// import ProductItemDetail from '../Products/ProductItemDetail';




class BottomDetail extends Component {




    

  render() {
    var { name } = this.props
    var { motangan } = this.props
    var { mota } = this.props
    //console.log(this.props);
    //console.log(name);

    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
            <h2 className="bold-txt">{name}</h2>
            <h3 className="bold-txt">Bài viết chi tiết</h3>
            <p className="bold-txt">{motangan}</p>
            
            <p></p>
           
            <p className="text-center">
              
              
              
              <button type="button" className="btn btn-lg btn-default" data-toggle="collapse" data-target="#demo">Xem Thêm <i className="fas fa-sort-down" /></button>
            </p>
            <div id="demo" className="collapse">
                <h4 className="bold-txt">Thiết kế tối giản, chắc chắn</h4>
                <p>{mota}</p>
            </div>
            <hr />
            
          </div>
    );
  }
}
export default BottomDetail;