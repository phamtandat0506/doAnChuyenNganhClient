import React, {Component} from 'react';



class TopLeftDetail extends Component {
  render() {
      var {img } = this.props
      //console.log(img);
    return (
        <div className="col-sm-5 chain">
            <div id="myCarousel" className="carousel slide w-100" data-ride="carousel">
            <div className="carousel-inner">
                <div className="item active">
                    <img src={`${img}`} alt="Los Angeles" />
                </div>
                <div className="item">
                    <img src={`${img}`} alt="Chicago" />
                </div>
                <div className="item"> 
                    <img src={`${img}`} alt="New York" />
                </div>
            </div>
            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" />
                <span className="sr-only">Next</span>
            </a>
            </div>
        </div>
        
      
    );
  }
}
export default TopLeftDetail;