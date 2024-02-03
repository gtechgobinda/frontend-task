import React from "react";
import SimilarSingleProduct from "./similar products/SimilarSingleProduct";
import { DesktopSimilarProductWrapper } from "../styles/DesktopSimilarProducts.Style";

const DesktopSimilarProducts = () => {
  return (
    <>
      <DesktopSimilarProductWrapper>
        <div className="similar-products-container">
          <SimilarSingleProduct />
          <SimilarSingleProduct />
          <SimilarSingleProduct />
          <SimilarSingleProduct />
          <SimilarSingleProduct />
        </div>
      </DesktopSimilarProductWrapper>
    </>
  );
};

export default DesktopSimilarProducts;
