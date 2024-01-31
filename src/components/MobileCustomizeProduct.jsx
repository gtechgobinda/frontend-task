import React from "react";
import { MobCustomizeProductWrapper } from "../styles/MobileCustomProductStyle";

const MobileCustomizeProduct = () => {
  return (
    <>
      <MobCustomizeProductWrapper>
        <p className="main-text">Dainty Crown Diamond Band Ring</p>
        <p className="sub-text">Extravagant Elegance Personified</p>
        <p className="sub-text2">Gold, KT & Diamond Details</p>

        <section className="details-option">
          <span>18KT</span>
          <span>White Gold</span>
          <span>3.302g</span>
          <span>3.345ct</span>
          <span>IJ-SI</span>
        </section>

        <div className="customize-section">
          <div className="customize-title">CUSTOMISE YOUR PRODUCT</div>
          <p className="selectSize">Select Size</p>
          <section className="selectSize-section">
            <select className="select">
              <option value="">12 (51.8 mm) - Ready to Ship</option>
            </select>
            <span>Size Guide</span>
          </section>
        </div>
      </MobCustomizeProductWrapper>
    </>
  );
};

export default MobileCustomizeProduct;
