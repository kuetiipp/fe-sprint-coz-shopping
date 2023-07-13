import React from "react";
import "./productsItem.css";

export default function ProductsItem({ productsItem }) {
  return (
    <div className="product">
      <div>상품 리스트</div>

      <div key={productsItem.id} className="products-container">
        {productsItem.map((products, idx) => {
          if (idx < 4) {
            return (
              <div key={products.id} className="products-content">
                <div className="img-wrapper">
                  <img
                    className="products-img"
                    src={
                      products.image_url === null
                        ? products.brand_image_url
                        : products.image_url
                    }
                    alt={products.title}
                  ></img>
                </div>
                <span className="products-name">{products.title}</span>
                <span className="discount-or-follower">
                  {products.dicountPercentage === null
                    ? `관심고객수`
                    : products.dicountPercentage}
                </span>
                <span className="products-sub-title">{products.sub_title}</span>
                <span className="products-price-or-like">
                  {products.price === null ? products.follower : products.price}
                </span>
                {/* <button
              className="products-button"
              onClick={(e) => handleClick(e, item.id)}
            >
              장바구니 담기
            </button> */}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
