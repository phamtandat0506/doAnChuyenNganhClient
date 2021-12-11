// import React, { Component } from 'react';
// import axios from 'axios';
// import { connect } from 'react-redux';
// import News from './component/News';








// class App extends Component {
  
//   constructor(props){
//     super(props);
//     this.state={
//       news : []
//     }
//   }

//   componentDidMount() {
    
//     axios.get('/api/news')
//          .then(res => {
//           console.log(res)
          
//             const news = res.data
//             this.setState({news : news.news})
            
//           })
//          .catch(error => console.log(error));
//   };

  

//   render() {
    
//     //var {news} = this.state;
    
//     return(
//       <div>
//         <h1>hello</h1>
//         <div>
          
//         {this.state.news.map(item => (
//           <li key={item.id}>
//             <h2>{item.title}</h2>
//             <div>{item.description}</div>
//             <div>{item.content}</div>
//           </li>
//         ))}
//         </div>
//       </div>
//     )
//   }
//   // shonNew = (news) => {
    
//   //   var result = null {this.shonNew(news)}
//   //   console.log(news )
//   //   if(news.length > 0){
//   //    console.log('mang rong')
//   //     result = news.map((news, index) => {
//   //       return(
//   //         <News
//   //           key = {index}
//   //           news = {news}
//   //           index = {index}
//   //         />
//   //       )
//   //     }) 
      
//   //   }
//   //   console.log( '== ' + result)
//   //   return result;
//   // }
// }


// const mapStateToProp = state => {
//   return {
//     news : state.news
//   }
// }

// export default connect(mapStateToProp, null)(App);



// // import React, { Component } from 'react';
// // import axios from 'axios';

// // class App extends Component {
// //   constructor (props) {
// //     super(props);
// //     this.state = {
// //       news: []
// //     }
// //   };

// //   componentDidMount() {
// //     axios.get('/api/news')
// //          .then(res => {
// //             const news = res.data;
// //             this.setState({ news: news.news });
// //           })
// //          .catch(error => console.log(error));
// //   };

// //   render() {
// //     return(
// //       <ul>
// //         {this.state.news.map(item => (
// //           <li key={item.id}>
// //             <h2>{item.title}</h2>
// //             <div>{item.description}</div>
// //           </li>
// //         ))}
// //       </ul>
// //     )
// //   }
// // };

// // export default App;



// import React, {useState, useEffect } from "react";
// import axios from 'axios';

// function App() {

//   const [news, setNews ] = useState([])
  
//   useEffect(() => {
//     axios.get('/api/news')
//          .then(res => {
          
          
//             const add = res.data
//             const pro = add.news
            
//             setNews( pro )
            
//           })
//          .catch(error => console.log(error));
//   }, [])
  


//   return (
//     <div>
//           <ul>
//           <h1>Tieu de</h1>
//             {
              
//               news.map(item => (<li key={item.id}>{ item.title }/ {item.content}</li>

//             ))
//           }
//           </ul>
//     </div>
//   );
// }

// export default App;

import React from "react";
import './App.css';
import Menu from "./Component/Header/Menu";
import ContentLeft from "./Component/ContentLeft/ContentLeft";
import Footer from './Component/Footer/Footer';
//import axios from 'axios';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProductDetailPage from './Pages/ProductDetailPage';
import ProductListPage from "./Pages/ProductListPage";
import NotFoundPage from './Pages/NotFound';
import ManagerLaptopPage from "./Pages/ManagerLaptopPage";
import ManagerCatePage from './Pages/ManagerCatePage';
import GamingPage from "./Pages/GamingPage";
import InspironPage from './Pages/InspironPage';
import VostroPage from './Pages/VostroPage';
import CartPage from "./Pages/CartPage";




function App() {

  return (
    <div>
      <Router>
        <div className="main">
          <Menu></Menu>
          <div className="row bgr-white"> 
            <ContentLeft></ContentLeft>
            
            <Routes>
              <Route path="/" exact element={<HomePage/>}/>
              <Route path="/chi-tiet/:slug.:id.html" element={<ProductDetailPage/>}/> 
              <Route path="/san-pham" element={<ProductListPage/>}/>
              <Route path="/san-pham-gaming" element={<GamingPage/>}/>
              <Route path="/san-pham-inspiron" element={<InspironPage/>}/>
              <Route path="/san-pham-vostro" element={<VostroPage/>}/>
              <Route path="/quan-ly-laptop" element={<ManagerLaptopPage/>}/>
              <Route path="/quan-ly-loai" element={<ManagerCatePage/>}/>
              <Route path="/gio-hang" element={<CartPage/>}/>
              <Route path="" element={<NotFoundPage/>}/>
            </Routes> 
            
          </div>
          <Footer></Footer>
        </div>
      </Router>
    </div>
  );
}

export default App;