import React from "react";
import Discription from "../components/Discription";
import ProductPhoto from "../components/ProductPhoto";

const Hero = () => {
  return (
    <section className="hero">
      <ProductPhoto />
      <Discription />
    </section>
  );
};

export default Hero;
