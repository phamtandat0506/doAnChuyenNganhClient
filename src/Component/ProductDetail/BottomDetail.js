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
            <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo">Xem Thêm <i className="fas fa-sort-down" /></button>
            </p>
            <div id="demo" className="collapse">
                <h4 className="bold-txt">Thiết kế tối giản, chắc chắn</h4>
                <p>{mota}</p>
                
               {/**  <h4 className="bold-txt">Phá bỏ mọi ranh giới với hình ảnh cùng âm thanh chân thật</h4>
                <p>Màn hình 15.6 inch với độ phân giải Full HD (1920 x 1080) cung cấp cho bạn hình ảnh sắc nét, sống động như thật cùng màu sắc được tái 
                tạo chân thật nhưng vẫn tiết kiệm năng lượng tối ưu nhờ công nghệ LED Backlit.</p>
                <p> Công nghệ Wide Viewing Angle (WVA) mang đến khung hình rộng mở đến 178 độ, cho phép bạn làm việc hay giải trí ở cả những nơi có điều kiện ánh sáng 
                bật lợi mà không lo mỏi mắt nhờ công nghệ chống chói Anti Glare.</p>

                <h4 className="bold-txt">Phù hợp với thời đại với phong cách hiện đại, đơn giản</h4>

                <p>Laptop Dell Vostro với trọng lượng 1.98 kg và dày 19.9 mm, cùng lớp vỏ được chế tác từ nhựa chắc chắn, bền bỉ, 
                tuy máy có khối lượng không nhẹ nhưng bạn vẫn có thể bỏ vào balo và mang theo di chuyển đến bất kỳ đâu mà không lo chiếm quá nhiều diện tích.</p>
                






                ////////////////////////////////////////////////////////////
                <h4 className="bold-txt">Màn hình sắc nét, âm thanh sống động</h4>

                <p>Có kích thước màn hình 15.6 inch cho không gian hiển thị rộng rãi cùng với độ phân giải Full HD (1920 x 1080) cho hình ảnh sắc nét từng chi tiết.</p>
                <p>Công nghệ màn hình LED và WVA (Wide Viewing Angle) cho góc nhìn rộng lên đến 178 độ hiển thị màu sắc hình ảnh đồng nhất ở mọi góc nhìn, bạn có thể xem 
                    màn hình ở nhiều vị trí khác nhau mà hình ảnh vẫn không bị biến dạng hay mờ nhòe.</p>
                
                <p>Laptop Dell Gaming G3500B i7 (P89F002G3500B) phù hợp với mọi nhu cầu sử dụng dù học tập, công việc hay giải trí bằng các tựa game bởi cấu hình mạnh mẽ 
                    thiết kế linh động phù hợp với mọi đối tượng.</p>*/}

            </div>
            <hr />
            {/** <div className="row txt-pro">
                <ProductItemDetail></ProductItemDetail>
                <ProductItemDetail></ProductItemDetail>
                <ProductItemDetail></ProductItemDetail>
                <ProductItemDetail></ProductItemDetail>
                
            </div>*/}
          </div>
    );
  }
}
export default BottomDetail;