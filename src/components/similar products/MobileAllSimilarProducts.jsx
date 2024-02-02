import React from "react";
import SimilarSingleProducts from "./SimilarSingleProduct";
import { AllSingleProductWrapper } from "../../styles/similar products/MobileAllSimilarProducts.Styles";
import line from "../../assets/line.svg";
const MobileAllSimilarProducts = () => {
  return (
    <>
      `
      <AllSingleProductWrapper>
        <section className="two-products-container">
          <div className="two-products">
            <SimilarSingleProducts />
            <SimilarSingleProducts />
          </div>
        </section>
        <div className="similar-style">
          <section className="text">
            <span className="similar">COMPLETE</span>
            <span>THE LOOK</span>
          </section>
          <section>
            <img src={line} alt="" />
          </section>
        </div>
        <section className="two-products-container">
          <div className="two-products">
            <SimilarSingleProducts />
            <SimilarSingleProducts />
          </div>
        </section>
      </AllSingleProductWrapper>
    </>
  );
};

export default MobileAllSimilarProducts;
