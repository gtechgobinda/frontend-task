import React from "react";
import RingBand from "../assets/main product/Regalia Diamond Band.svg";
import { ProductWrapper } from "../styles/MainProductStyle";
import miniProduct1 from "../assets/main product/mini-product1.svg";
import miniProduct2 from "../assets/main product/mini-product2.svg";
import playButton from "../assets/main product/playButton.svg";
import left from "../assets/main product/left.svg";
import right from "../assets/main product/right.svg";
import ellipse from "../assets/main product/Ellipse.svg";
import degree from "../assets/main product/degree.svg";
const MainProduct = () => {
  return (
    <>
      <ProductWrapper>
        <div className="lime-light-degree">
          <span className="lime-light">LIME LIGHT</span>
          <img src={degree} alt="" />
        </div>
        <div className="ring-band-img">
          <img src={RingBand} alt="" />
        </div>
        <div className="product-swipe-section">
          <section className="miniProduct-section">
            <div>
              <img src={miniProduct1} alt="" />
            </div>
            <div>
              <img src={miniProduct2} alt="" />
            </div>
          </section>

          <section className="playSection">
            <div>
              <img src={left} alt="" />
            </div>
            <div>
              <img src={playButton} alt="" />
            </div>
            <div>
              <img src={right} alt="" />
            </div>
          </section>

          <section>
            <img src={ellipse} alt="" />
            <img src={ellipse} alt="" />
            <img src={ellipse} alt="" />
          </section>
        </div>
        <div className="zoom-text">
          PRODUCT SHOWN IN IMAGE IS IN 10X ZOOM FOR YOUR CLARITY
        </div>
      </ProductWrapper>
    </>
  );
};

export default MainProduct;
