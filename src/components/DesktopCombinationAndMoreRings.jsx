import React from "react";
import InfoLogo from "../assets/productInfo.svg";
import diamond from "../assets/combinationBox/diamond.svg";
import {
  ComSelectBoxWrapper,
  CombinationBoxWrapper,
} from "../styles/CombinationBox.Styles";
import styled from "styled-components";
import ring from "../assets/ring.svg";
import { RingWrapper } from "../styles/MoreRings.Styles";
const DesktopCombinationAndMoreRings = () => {
  return (
    <>
      <DesktopCombinationAndMoreRingsWrapper>
        <div className="main">
          <div className="ready-to-ship-main-container">
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
            <div className="main-box-container">
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
            </div>
          </div>
          <div className="more-rings-main-container">
            <RingWrapper>
              <div className="ring-container">
                <section className="heading-text">
                  <p className="more-rings">More 18 Rings</p>
                  <p className="view-all">View All</p>
                </section>
                <section className="img-section">
                  <img src={ring} alt="" />
                  <img src={ring} alt="" />
                  <img src={ring} alt="" />
                </section>
              </div>
            </RingWrapper>
            <RingWrapper>
              <div className="ring-container">
                <section className="heading-text">
                  <p className="more-rings">More Yellow Gold Rings</p>
                  <p className="view-all">View All</p>
                </section>
                <section className="img-section">
                  <img src={ring} alt="" />
                </section>
              </div>
            </RingWrapper>
          </div>
        </div>
      </DesktopCombinationAndMoreRingsWrapper>
    </>
  );
};

export default DesktopCombinationAndMoreRings;

export const DesktopCombinationAndMoreRingsWrapper = styled.section`
  .main {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 15px 20px;
    gap: 100px;
    .ready-to-ship-main-container {
      div {
        padding: 5px 10px;
        .heading {
          display: flex;
          flex-direction: row;
          justify-content: start;
          align-items: center;
          gap: 5px;

          .ready-to-shop {
            color: #f77433;
            font-size: 13px;
            font-weight: 600;
          }
        }
        p {
          font-size: 9px;
          font-weight: 400;
        }
      }
      .main-box-container {
        display: flex;
        flex-direction: row;
        gap: 15px;
      }
    }
  }
`;
