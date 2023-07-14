import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import All from '../component/filter/filtering/All';
import Product from '../component/filter/filtering/Product';
import Category from '../component/filter/filtering/Category';
import Exibition from '../component/filter/filtering/Exibition';
import Brand from '../component/filter/filtering/Brand';

import AllButton from "../component/filter/assets/allbtn.png";
import ProductButton from "../component/filter/assets/productbtn.png";
import CategoryButton from "../component/filter/assets/categorybtn.png";
import ExibitionButton from "../component/filter/assets/exibitionbtn.png";
import BrandButton from "../component/filter/assets/brandbtn.png";

const ProductsList = () => {
  const [productsItem, setProductsItem] = useState([]);
  const [filteredList, setFilteredList] = useState();

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((response) => {
        setProductsItem(response.data);
      });
  }, []);
  
  const list =
    productsItem &&
    productsItem.map((product) => {
      return product;
    });

  const type = list.type;
  const handleClickButton = e => {
    const { name } = e.target;
    setFilteredList(name);
  };

  const selectComponent = {
    All: <All list={list}/>,
    Product: <Product list={list}/>,
    Category: <Category list={list}/>,
    Exibition: <Exibition list={list}/>,
    Brand: <Brand list={list}/>,
  };

  return (
    <div className="products-list">
            <div className="filter">
      <div className="filter-button-container">
        <div className="filter-btn-content">
          <button key={productsItem.id} onClick={handleClickButton} name={list.All} className="all-button">
            <img alt="all" src={AllButton}></img>
            <p>전체</p>
          </button>
        </div>
        <div  className="filter-btn-content">
          <button key={productsItem.id} onClick={handleClickButton} name={list.product}  className="product-button">
            <img alt="all" src={ProductButton}></img>
            <p>상품</p>
          </button>
        </div>
        <div className="filter-btn-content">
          <button key={productsItem.id} onClick={handleClickButton} name={list.Category}  className="category-button">
            <img alt="all" src={CategoryButton}></img>
            <p>카테고리</p>
          </button>
        </div>
        <div className="filter-btn-content">
          <button key={productsItem.id} onClick={handleClickButton} name={list.Exibition}  className="exibition-button">
            <img alt="all" src={ExibitionButton}></img>
            <p>기회전</p>
          </button>
        </div>
        <div className="filter-btn-content">
          <button key={productsItem.id} onClick={handleClickButton} name={list.Brand}  className="brand-button">
            <img alt="all" src={BrandButton}></img>
            <p>브랜드</p>
          </button>
        </div>
      </div>
      {filteredList && <div>{selectComponent[filteredList]}</div>}
    </div>
        </div>
        
  );
};

export default ProductsList;
