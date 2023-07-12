import React from "react";
import { Link } from "react-router-dom";


const Dropdown = () => {
    return (
        <div className="dropdown-menu">
            <Link to="/">000님 안녕하세요!</Link>
            <Link to="/products/list">상품 리스트 페이지</Link>
            <Link to="/bookmark">북마크 페이지</Link>
        </div>
    );
}

export default Dropdown;