import React, { useState } from "react";
import { p1s, p1, p2s, p2, p3s, p3, p4s, p4 } from "../assets/index";

import "./ProductPhoto.css";

const ProductPhoto = () => {
  const imgs = [p1, p2, p3, p4];
  const [photo, setPhoto] = useState(p1);
  return (
    <div className="photos-container">
      <div className="big-photo">
        <img src={photo} alt="p1" />
      </div>
      <div className="small-photot">
        {imgs.map((img) => (
          <div className="img__" key={img}>
            <div className={`${ photo == img ? "overlay" : "" }`} ></div>
            <img src={img} alt={
              
              `${img}`} onClick={() => setPhoto(img)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPhoto;
