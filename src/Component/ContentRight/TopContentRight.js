import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';


function TopContentRight()  {

    const [khuyenMai, setKhuyenMai] = useState([])

    useEffect(() => {
    axios.get('/api/khuyenmai')
            .then(res => {
            const khuyenMai = res.data
            var img = khuyenMai.khuyenMai
            //console.log(img)
            setKhuyenMai(img)
            })
            .catch(error => console.log(error));
    }, [])
    
    return (
        <div className="container-fluid">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to={0} className="active" />
                <li data-target="#myCarousel" data-slide-to={1} />
                <li data-target="#myCarousel" data-slide-to={2} />
                <li data-target="#myCarousel" data-slide-to={3} />
            </ol>
            <div className="carousel-inner">
                
               {khuyenMai.map(item => (
                    <div className={`${item.tenanh !== 'anh bon' ? "item" : "item  active"}`}  key={item.id}  >
                        <img src={`${item.anh}`} style={{width: '100%'}} alt={`${item.tenanh}`}/>
                    </div>
                    
                ))}

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
export default TopContentRight;



    

    // constructor (props) {
    //     super(props)
    //     this.state = {
    //         khuyenMai : []
    //     }
        
    // }

    // componentDidMount() {
    //     axios.get('/api/khuyenmai')
    //         .then(res => {
    //             const khuyenMai = res.data
    //             console.log(res.data)
    //             this.setState({khuyenMai : khuyenMai.khuyenMai})
    //         })
    //         .catch(error => console.log(error))
    // }