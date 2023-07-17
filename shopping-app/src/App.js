import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import ProductsList from "./pages/ProductsPage/ProductsList";
import Bookmark from "./pages/Bookmark";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <div className="app-container">
        <header className="app-header">
          <Header />
        </header>
          <div className="app-body">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/products/list" element={<ProductsList />} />
            <Route path="/bookmark" element={<Bookmark />} />
          </Routes>
          </div>
          <div className="app-footer">
          <Footer />
        </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
