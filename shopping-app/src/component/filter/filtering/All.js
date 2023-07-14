import React from "react";

const All = ({ list }) => {
  return (
    <div key={list.id} className="list-content">
      <div className="img-wrapper">
        <img
          className="list-img"
          src={
            list.image_url === null
              ? list.brand_image_url
              : list.image_url
          }
          alt={list.title}
        ></img>
      </div>
      <div className="product-content-info">
        <div className="product-info-left">
          <span className="list-name">{list.title}</span>
          <span className="list-sub-title">{list.sub_title}</span>
        </div>
        <div className="product-info-right">
          {list.discountPercentage && (
            <span className="discount">{list.discountPercentage}%</span>
          )}
          {list.follower && <span className="follower">관심고객수</span>}
          {list.price === null ? (
            <span>{list.follower}</span>
          ) : (
            <span>{list.price}원</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default All;
