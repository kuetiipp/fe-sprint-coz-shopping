import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import AllButton from "/Users/pchoo/fe-sprint-coz-shopping/shopping-app/src/component/filter/assets/allbtn.png";
import ProductButton from "/Users/pchoo/fe-sprint-coz-shopping/shopping-app/src/component/filter/assets/productbtn.png";
import CategoryButton from "/Users/pchoo/fe-sprint-coz-shopping/shopping-app/src/component/filter/assets/categorybtn.png";
import ExibitionButton from "/Users/pchoo/fe-sprint-coz-shopping/shopping-app/src/component/filter/assets/exibitionbtn.png";
import BrandButton from "/Users/pchoo/fe-sprint-coz-shopping/shopping-app/src/component/filter/assets/brandbtn.png";
import "/Users/pchoo/fe-sprint-coz-shopping/shopping-app/src/pages/ProductsPage/ProductList.css";

import Filtering from "../../component/filter/filtering/filterting";

const ProductsList = () => {
  const [productsItem, setProductsItem] = useState([]);
  const [isFiltered, setIsFiltered] = useState();

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((response) => {
        setProductsItem(response.data);
      });
  }, []);

  const typeList =
    productsItem &&
    productsItem.map((product) => {
      return product.type;
    });

  const handleFilter = (e) => {
    setIsFiltered(
      <Filtering productsItem={productsItem} name={e.target.name} />
    );
  };

  return (
    <div className="filtered-list">
      <div className="filtered">
        <div className="filter-button-container">
          <div className="filter-btn-content">
            <button className="all-button">
              <img
                alt="all"
                src={AllButton}
                onClick={handleFilter}
                name="All"
              ></img>
              <p>전체</p>
            </button>
          </div>
          <div className="filter-btn-content">
            <button className="product-button">
              <img
                alt="product"
                src={ProductButton}
                onClick={handleFilter}
                name={
                  typeList.filter((el) => el === "Product") ? "Product" : null
                }
              ></img>
              <p>상품</p>
            </button>
          </div>
          <div className="filter-btn-content">
            <button className="category-button">
              <img
                alt="category"
                src={CategoryButton}
                onClick={handleFilter}
                name={
                  typeList.filter((el) => el === "Category") ? "Category" : null
                }
              ></img>
              <p>카테고리</p>
            </button>
          </div>
          <div className="filter-btn-content">
            <button className="exhibition-button">
              <img
                alt="exibition"
                src={ExibitionButton}
                onClick={handleFilter}
                name={
                  typeList.filter((el) => el === "Exhibition")
                    ? "Exhibition"
                    : null
                }
              ></img>
              <p>기획전</p>
            </button>
          </div>
          <div className="filter-btn-content">
            <button className="brand-button">
              <img
                alt="brand"
                src={BrandButton}
                onClick={handleFilter}
                name={typeList.filter((el) => el === "Brand") ? "Brand" : null}
              ></img>
              <p>브랜드</p>
            </button>
          </div>
        </div>
      </div>
      {isFiltered}
    </div>
  );
};

export default ProductsList;
