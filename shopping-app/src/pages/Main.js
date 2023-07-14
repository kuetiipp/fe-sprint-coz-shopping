import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ProductsItem from "../component/ProductsItem";
import BookmarkList from "../component/BookmarkList";

const Main = () => {
  const [productsItem, setProductsItem] = useState([]);

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((response) => {
        setProductsItem(response.data);
      });
  }, []);

  return (
    <div className="main">
      <ProductsItem productsItem={productsItem} />
      <BookmarkList productsItem={productsItem} />
    </div>
  );
};

export default Main;
