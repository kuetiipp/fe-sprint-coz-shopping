import React from "react";
import AllButton from "./assets/allbtn.png";
import ProductButton from "./assets/productbtn.png";
import CategoryButton from "./assets/categorybtn.png";
import ExibitionButton from "./assets/exibitionbtn.png";
import BrandButton from "./assets/brandbtn.png";
import "./filter.css";

const Filtered = ({ productsItem }) => {
  const list =
    productsItem &&
    productsItem.map((product) => {
      return product;
    });

  const type = list.type;
  return (
    <div className="filter">
      <div key={productsItem.id} className="filter-button-container">
        <div className="filter-btn-content">
          <button className="all-button">
            <img alt="all" src={AllButton}></img>
            <p>전체</p>
          </button>
        </div>
        <div className="filter-btn-content">
          <button className="product-button">
            <img alt="all" src={ProductButton}></img>
            <p>상품</p>
          </button>
        </div>
        <div className="filter-btn-content">
          <button className="category-button">
            <img alt="all" src={CategoryButton}></img>
            <p>카테고리</p>
          </button>
        </div>
        <div className="filter-btn-content">
          <button className="exibition-button">
            <img alt="all" src={ExibitionButton}></img>
            <p>기회전</p>
          </button>
        </div>
        <div className="filter-btn-content">
          <button className="brand-button">
            <img alt="all" src={BrandButton}></img>
            <p>브랜드</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filtered;
