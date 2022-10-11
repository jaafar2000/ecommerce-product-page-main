import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./button.css";
const Button = () => {
  return (
    <div className="addBtn">
      <button type="button">
        <i>
          <AiOutlineShoppingCart />
        </i>
        Add To Cart
      </button>
    </div>
  );
};

export default Button;
