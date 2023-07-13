import React from "react";
import "./bookmarkItem.css";

export default function BookmarkList({ productsItem }) {
  return (
    <div className="bookmark">
      <div>북마크 리스트</div>
      <div key={productsItem.id} className="bookmark-container">
        {productsItem.map((products, idx) => {
          if (idx < 4) {
            return (
              <div key={products.id} className="bookmark-content">
                <div className="img-wrapper">
                  <img
                    className="bookmark-img"
                    src={
                      products.image_url === null
                        ? products.brand_image_url
                        : products.image_url
                    }
                    alt={products.title}
                  ></img>
                </div>
                <span className="bookmark-name">{products.title}</span>
                <span className="discount-or-follower">
                  {products.dicountPercentage === null
                    ? `관심고객수`
                    : products.dicountPercentage}
                </span>
                <span className="bookmark-sub-title">{products.sub_title}</span>
                <span className="bookmark-price-or-like">
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
