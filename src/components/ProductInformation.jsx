import React from "react";
import { ProductInfoWrapper } from "../styles/ProductInformation.styles";
import InfoLogo from "../assets/productInfo.svg";

const ProductInformation = () => {
  return (
    <ProductInfoWrapper>
      <section className="main-product-info">
        <div className="product-info-heading">
          <img src={InfoLogo} alt="info" />
          <span>Product Information:</span>
        </div>
        <div className="dimension-wight-purity">
          <section className="dimension">
            <p className="dimension-heading">Dimension</p>
            <p>Width - 4.80 mm</p>
            <p>Height - 2.30 mm</p>
            <p>Size - 12(51.8 mm)</p>
          </section>

          <section className="wight-purity">
            <p className="wight-heading">Weight</p>
            <p>Approx.Weight - 3.920 Gm</p>
            <p className="purity-heading">Purity</p>
            <p>Purity - 18 KT</p>
          </section>
        </div>
        <div className="diamonds-gemstones">
          <p className="heading">Diamonds & Gemstones</p>
          <section>
            <span>
              <p>Diamond Type</p>
              <p>Setting Type</p>
              <p>Total Number</p>
              <p>Total Weight</p>
            </span>
            <span>
              <p>IJ-SI</p>
              <p>Micro Prong</p>
              <p>56</p>
              <p>0.22ct</p>
            </span>
          </section>
        </div>
      </section>
    </ProductInfoWrapper>
  );
};

export default ProductInformation;
