import React, { useState } from "react";
import ReactModal from "react-modal";
import "./productsItem.css";

export default function ProductsItem({ productsItem }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedImg, setClickedImg] = useState();

  const modalHandler = (e) => {
    if (!isModalOpen) {
      setIsModalOpen(true);
      productsItem &&
        productsItem.filter((product) => {
          if (product.image_url === e.target.name) {
            setClickedImg(product.image_url);
          } else if (product.brand_image_url === e.target.name) {
            setClickedImg(product.brand_image_url);
          }
        });
    } else {
      setIsModalOpen(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="product">
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{
          overlay: { zIndex: 2 },
          content: {
            background: "none",
            width: "744px",
            height: "480px",
            margin: "auto",
            border: "none",
            padding: 0,
            borderRadius: "10px",
            boxShadow: "0px 0px 36px 0px rgba(0,0,0,0.5)",
          },
        }}
      >
        <div className="modal-img">
          <img src={clickedImg} alt=""></img>
        </div>
      </ReactModal>
      <div className="product-title">상품 리스트</div>
      <div className="products-container">
        {productsItem &&
          productsItem.map((products, idx) => {
            if (idx < 4) {
              return (
                <div key={products.id} className="products-content">
                  <button onClick={modalHandler}>
                    <div className="img-wrapper">
                      <img
                        className="products-img"
                        src={
                          products.image_url === null
                            ? products.brand_image_url
                            : products.image_url
                        }
                        alt={products.title}
                        name={
                          products.image_url === null
                            ? products.brand_image_url
                            : products.image_url
                        }
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
                        {products.discountPercentage && (
                          <span className="discount">
                            {products.discountPercentage}%
                          </span>
                        )}
                        {products.follower && (
                          <span className="follower">관심고객수</span>
                        )}
                        {products.price === null ? (
                          <span>{products.follower}</span>
                        ) : (
                          <span>{products.price}원</span>
                        )}
                      </div>
                    </div>
                  </button>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}

ReactModal.setAppElement("#root");
