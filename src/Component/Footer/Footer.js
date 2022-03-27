import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      
      <footer className="nb-footer">
        <div className="container">
          <div className="row">
            
            <div className="col-md-3 col-sm-6">
              <div className="footer-info-single">
                <h2 className="title">Trung Tâm Hỗ Trợ</h2>
                <ul className="list-unstyled">
                  <li><a href="123" ><i className="fa fa-angle-double-right" /> Cách thanh toán</a></li>
                  <li><a href="123" ><i className="fa fa-angle-double-right" /> FAQ's</a></li>
                  <li><a href="123" ><i className="fa fa-angle-double-right" /> Sitemap</a></li>
                  <li><a href="123" ><i className="fa fa-angle-double-right" /> Thông tin giao hàng</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-info-single">
                <h2 className="title">Thông Tin Chi Tiết</h2>
                <ul className="list-unstyled">
                  <li><a href="123" ><i className="fa fa-angle-double-right" /> Về chúng tôi</a></li>
                  <li><a href="123" ><i className="fa fa-angle-double-right" /> FAQ's</a></li>
                  <li><a href="123" ><i className="fa fa-angle-double-right" /> SBán các mặt hàng</a></li>
                  <li><a href="123" ><i className="fa fa-angle-double-right" /> Liên hệ chúng tôi</a></li>

                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-info-single">
                <h2 className="title">Bảo mật &amp; Riêng tư</h2>
                <ul className="list-unstyled">
                  <li><a href="123" ><i className="fa fa-angle-double-right" /> Điều khoản sử dụng</a></li>
                  <li><a href="123" ><i className="fa fa-angle-double-right" /> Chính sách bảo mật</a></li>
                  <li><a href="123" ><i className="fa fa-angle-double-right" /> Chính sách trả lại / hoàn lại tiền</a></li>
                  <li><a href="123" ><i className="fa fa-angle-double-right" /> Địa điểm cửa hàng</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-info-single">
                <h2 className="title">THANH TOÁN</h2>
                <p>Đội ngũ tư vấn nhiệt tình, trách nhiệm - hỗ trợ tư vấn phù hợp với nhu cầu và tài chính. Đội ngũ kỹ thuật dày dặn kinh nghiệm và tác phong chuyên nghiệp. Sản phẩm chính hãng, mẫu mã phong phú đa dạng - chính sách bảo hành và hỗ trợ vượt trội. Giá thành cạnh tranh, miễn phí lắp đặt, miễn phí giao hàng nội thành.</p>
              </div>
            </div>
          </div>
        </div>
        <section className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <p>Copyright © 2021. Đ.DellShop.</p>
              </div>
              <div className="col-sm-6" />
            </div>
          </div>
        </section>
      </footer>
        
    );
  }
}
export default Footer;