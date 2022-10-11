import React from "react";
import { heroData } from "../data/data";
import Button from "./Button";
import Counter from "./Counter";

import "./Discription.css";

const Discription = () => {
  return (
    <section>
      <div className="description">
        <p>{heroData.companyName}</p>
        <p>{heroData.title}</p>
        <p>{heroData.p}</p>
        <p>
          ${heroData.nowPrice} <span>{heroData.discount}</span>{" "}
        </p>
        <p>${heroData.price}</p>
      </div>
      <div className="counter_button">
        <Counter />
        <Button />
      </div>
    </section>
  );
};

export default Discription;
