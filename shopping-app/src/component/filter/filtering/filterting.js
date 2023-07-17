import React from "react";
import "/Users/pchoo/fe-sprint-coz-shopping/shopping-app/src/component/productsItem.css";

function Filtering({ productsItem, name }) {
  return (
    <div className="filter">
      {productsItem &&
        productsItem.map((product) => {
          if (product.type === name) {
            return (
              <div key={product.id} className="filtered-content">
                <button>
                  <div className="img-wrapper">
                    <img
                      className="products-img"
                      src={
                        product.image_url === null
                          ? product.brand_image_url
                          : product.image_url
                      }
                      alt={product.title}
                    ></img>
                  </div>
                  <div className="product-content-info">
                    <div className="product-info-left">
                      <span className="products-name">{product.title}</span>
                      <span className="products-sub-title">
                        {product.sub_title}
                      </span>
                    </div>
                    <div className="product-info-right">
                      {product.discountPercentage && (
                        <span className="discount">
                          {product.discountPercentage}%
                        </span>
                      )}
                      {product.follower && (
                        <span className="follower">관심고객수</span>
                      )}
                      {product.price === null ? (
                        <span>{product.follower}</span>
                      ) : (
                        <span>{product.price}원</span>
                      )}
                    </div>
                  </div>
                </button>
              </div>
            );
          } else if (name === "All") {
            return (
              <div key={product.id} className="filtered-content">
                <button>
                  <div className="img-wrapper">
                    <img
                      className="products-img"
                      src={
                        product.image_url === null
                          ? product.brand_image_url
                          : product.image_url
                      }
                      alt={product.title}
                    ></img>
                  </div>
                  <div className="product-content-info">
                    <div className="product-info-left">
                      <span className="products-name">{product.title}</span>
                      <span className="products-sub-title">
                        {product.sub_title}
                      </span>
                    </div>
                    <div className="product-info-right">
                      {product.discountPercentage && (
                        <span className="discount">
                          {product.discountPercentage}%
                        </span>
                      )}
                      {product.follower && (
                        <span className="follower">관심고객수</span>
                      )}
                      {product.price === null ? (
                        <span>{product.follower}</span>
                      ) : (
                        <span>{product.price}원</span>
                      )}
                    </div>
                  </div>
                </button>
              </div>
            );
          }
        })}
    </div>
  );
}

export default Filtering;
