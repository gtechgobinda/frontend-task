import React from "react";
import wring from "../../assets/similar product/wring.svg";
import heart from "../../assets/similar product/heart.svg";
import simliar from "../../assets/similar product/similar.svg";
import group from "../../assets/similar product/group.svg";
import { SingleProductWrapper } from "../../styles/similar products/SimilarSingleProduct.Styles";
const SimilarSingleProduct = () => {
  return (
    <>
      <SingleProductWrapper>
        <section className="main-product">
          <div className="product-upper-section">
            <div className="trending-wishlist">
              <section className="trending">
                <p>TRENDING</p>
              </section>
              <img src={heart} alt="" />
            </div>
            <div className="main-img">
              <img src={wring} alt="" />
            </div>
            <div className="main-text-group">
              <section className="main-text">
                <p className="price">
                  <span>₹22,323</span>
                  <s>₹22,323</s>
                </p>
                <p className="name">Yemeraly Wings Diam...</p>
                <p className="off">(10% OFF Making Chargers)</p>
              </section>
              <section>
                <img src={group} alt="" />
              </section>
            </div>
          </div>
          <div className="bottom-text">
            <section className="similar-text">
              <img src={simliar} alt="" />
              <p>View Similar</p>
            </section>
            <section className="buy-now">
              <span>Buy Now</span>
            </section>
          </div>
        </section>
      </SingleProductWrapper>
    </>
  );
};

export default SimilarSingleProduct;
