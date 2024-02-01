import React from "react";
import InfoLogo from "../assets/productInfo.svg";
import diamond from "../assets/combinationBox/diamond.svg";
import {
  ComSelectBoxWrapper,
  CombinationBoxWrapper,
} from "../styles/CombinationBox.Styles";
const CombinationBox = () => {
  return (
    <>
      <CombinationBoxWrapper>
        <div>
          <div>
            <section className="heading">
              <img src={InfoLogo} alt="" />
              <p className="ready-to-shop">Ready to Ship</p>
            </section>

            <p>
              Select any one of the combination, if you are looking for fast
              delivery.
            </p>
          </div>
        </div>
        <ComSelectBoxWrapper>
          <div className="box-container">
            <div className="main-content">
              <div className="row1">
                <section className="kt-section">
                  <span>14Kt</span>
                </section>
                <span className="text1">Rose Gold</span>
              </div>
              <div className="row2">
                <img src={diamond} alt="" />
                <span className="text2">Rose Gold</span>
              </div>
              <div className="row3">
                <section className="size">
                  <span>8</span>
                </section>
                <span className="text3">Rose Gold</span>
              </div>
            </div>
            <div className="select">
              <span>Select</span>
            </div>
          </div>
        </ComSelectBoxWrapper>
      </CombinationBoxWrapper>
    </>
  );
};

export default CombinationBox;
