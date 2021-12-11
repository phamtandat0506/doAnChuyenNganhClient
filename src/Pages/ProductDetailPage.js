import React, { useState, useEffect } from 'react';
import BottomDetail from '../Component/ProductDetail/BottomDetail';
import TopRightDetail from '../Component/ProductDetail/TopRightDetail';
import TopLeftDetail from '../Component/ProductDetail/TopLeftDetail';
import {useParams } from 'react-router-dom';
import axios from 'axios';

function ProductlistPage() {

      const [laptop, setLaptop] = useState([])

      let {slug, id} = useParams();
      // id = parseInt(id)
      //console.log(typeof(id))

      useEffect(() => {
        axios.get('/api/laptop')
                .then(res => {
                const laptop = res.data
                var laptops = laptop.products
                
                //console.log(laptop.products)
                //console.log(typeof(laptop.products[0].ID_LAPTOP))
                setLaptop(laptops)
                })
                .catch(error => console.log(error));
        }, [])

      

      return (
        
        
            <div>
            {laptop.map((item, index) => {
              if(item.ID_LAPTOP === id){
                return (
                  <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 "  key={index}>
                    <h4 className="bold-txt">{item.TEN_LAPTOP}</h4>        
                    <hr /> 
                    <div className="row">
                      <TopLeftDetail
                        img={item.IMG}
                      ></TopLeftDetail>
                      <TopRightDetail
                        price={item.GIA_LAPTOP}
                        nameLaptop={item.TEN_LAPTOP}
                        idLaptop={item.ID_LAPTOP}
                        img={item.IMG}
                        quality={1}
                      ></TopRightDetail>
                    </div>
                    <hr />
                    <div className="row">
                        <BottomDetail
                          name={item.TEN_LAPTOP}
                          motangan = { item.MOTANGAN_LAPTOP }
                          mota = { item.MOTA_LAPTOP }
                        ></BottomDetail>
                    </div>
                </div>
                )
              }
            })}
            </div>
                
                
            
           
        
      );

  }
  export default ProductlistPage;