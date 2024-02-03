import React from "react";
import bar from "../assets/boxes/bar.svg";
import cod from "../assets/boxes/cod.svg";
import exchange from "../assets/boxes/exchange.svg";
import hallmark from "../assets/boxes/hallmark.svg";
import return1 from "../assets/boxes/return1.svg";
import { BoxContainer, BoxWrapper } from "../styles/fourbox/Boxes.styles";
import styled from "styled-components";
import DesktopProductInformation from "./DesktopProductInformation";

const ProductInfoAndFourBox = () => {
  return (
    <>
      <ProductInfoAndFourBoxWrapper>
        <div className="main-section">
          <div>
            <DesktopProductInformation />
          </div>
          <div className="all-boxes">
            <BoxWrapper>
              <section className="box">
                <img src={cod} alt="" />
                <p>Cash on Delivery</p>
                <img src={bar} alt="" />
              </section>
            </BoxWrapper>
            <BoxWrapper>
              <section className="box">
                <img src={return1} alt="" />
                <p>7 Days Return</p>
                <img src={bar} alt="" />
              </section>
            </BoxWrapper>
            <BoxWrapper>
              <section className="box">
                <img src={exchange} alt="" />
                <p>Life Exchange</p>
                <img src={bar} alt="" />
              </section>
            </BoxWrapper>
            <BoxWrapper>
              <section className="box">
                <div className="img-container">
                  <img src={hallmark} alt="" />
                </div>
                <p>BIS Hallmark</p>
                <img src={bar} alt="" />
              </section>
            </BoxWrapper>
          </div>
        </div>
      </ProductInfoAndFourBoxWrapper>
    </>
  );
};

export default ProductInfoAndFourBox;

export const ProductInfoAndFourBoxWrapper = styled.section`
  .main-section {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
    padding-inline: 40px;
    .all-boxes {
      display: flex;
      flex-direction: row;
      gap: 20px;
    }
  }
`;
