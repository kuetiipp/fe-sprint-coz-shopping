import React from "react";
import "./productsItem.css";

export default function ProductsItem({ productsItem }) {
  return (
    <div className="product">
      <div className="product-title">상품 리스트</div>
      <div key={productsItem.id} className="products-container">
        {productsItem && productsItem.map((products, idx) => {
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
                <div className="product-content-info">
                  <div className="product-info-left">
                    <span className="products-name">{products.title}</span>
                    <span className="products-sub-title">
                      {products.sub_title}
                    </span>
                  </div>
                  <div className="product-info-right">
                    {products.discountPercentage &&
                      <span className="discount">
                        {products.discountPercentage}%
                      </span>
                    }
                    {products.follower &&
                      <span className="follower">관심고객수</span>
                    }
                    {products.price === null ? (
                      <span>{products.follower}</span>
                    ) : (
                      <span>{products.price}원</span>
                    )}
                  </div>
                </div>
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
