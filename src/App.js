import React from "react";
import './App.css';
import Menu from "./Component/Header/Menu";
import ContentLeft from "./Component/ContentLeft/ContentLeft";
import Footer from './Component/Footer/Footer';
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
import Register from './Component/User/Register';
import LoginPage from "./Pages/LoginPage";
import Search from "./Component/Search/Search";

 


function App() {

  const useEffect = () => {
    
  }

  return (
    <div>
      <Router>
        <div className="main">
          <Menu></Menu>
          <Search/>
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
              <Route path="/dang-ky" element={<Register/>}/>
              <Route path="/dang-nhap" element={<LoginPage/>}/>
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