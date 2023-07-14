import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Filtered from "../component/filter/Filtered";

const ProductsList = () => {
  const [productsItem, setProductsItem] = useState([]);

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((response) => {
        setProductsItem(response.data);
      });
  }, []);
  
  return (
    <div className="products-list">
            <Filtered productsItem={productsItem} />
        </div>
  );
};

export default ProductsList;
