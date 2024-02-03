import React from "react";
import MainProduct from "./MainProduct";
import { DesktopMainProdWrapper } from "../styles/DesktopMainProduct.Style";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import location from "../assets/desktopMainProduct/location.svg";
import heart from "../assets/desktopMainProduct/heart.svg";
import share from "../assets/desktopMainProduct/share.svg";
import car from "../assets/desktopMainProduct/car.svg";
import color2 from "../assets/color2.svg";
import Exchange from "./Exchange";
const DesktopMainProduct = () => {
  return (
    <>
      <DesktopMainProdWrapper>
        <div className="desktop-prod-wrapper">
          <div className="main-product-container">
            <div className="desktop-main-product-wrapper">
              <p className="path-text">
                Home / Products / Earrings / Just Lovely Earrings
              </p>
              <div className="desktop-main-product">
                <MainProduct />
              </div>
            </div>
            <div>
              <img src={color2} alt="" />
            </div>
            <div className="product-name-and-customization">
              <div className="extra-container">
                <section className="product-name-wishlist-share">
                  <span className="product-name">
                    Dainty Crown Diamond Band Ring
                  </span>
                  <span className="wishlist-share">
                    <img src={heart} alt="" />
                    <img src={share} alt="" />
                  </span>
                </section>
                <section className="customization-section-and-exchange-section">
                  <section>
                    <p className="product-sub-name">
                      Floral shine that can Entice
                    </p>
                    <div className="price-mrp-customization-delivery-text-all">
                      <div className="price-mrp">
                        <section className="price-all">
                          <span className="price">₹34948</span>
                          <s className="actual-price">₹36029</s>
                          <span className="save">Save ₹1,081</span>
                        </section>
                        <section className="mrp-flat">
                          <span className="mrp">MRP(Inclusive all Taxes)</span>
                          <span className="flat">FLAT 3% On MRP</span>
                        </section>
                        <hr />
                      </div>
                      <div className="customization-delivery-text-all">
                        <div className="customization-container">
                          <p className="customization-text">Customisation:</p>
                          <section className="options-arrow">
                            <section className="options">
                              <span>18KT</span>
                              <span>Yellow Gold</span>
                              <span>IJ-SI</span>
                            </section>
                            <section className="arrow">
                              <IoIosArrowDropdownCircle
                                color="#F77433"
                                size={20}
                              />
                            </section>
                          </section>
                        </div>
                        <div className="check-delivery-date-container">
                          <p className="top-text">
                            <span className="check-delivery-date">
                              Check Delivery Date
                            </span>
                            <span className="locate-me">Locate Me</span>
                          </p>
                          <div className="location-input-submit">
                            <section className="location-input">
                              <img src={location} alt="" />
                              <input type="text" placeholder="140406" />
                            </section>
                            <section className="submit">
                              <button>Submit</button>
                            </section>
                          </div>
                        </div>
                        <div className="delivery-text-img">
                          <img src={car} alt="" />
                          <p className="delivery-text">
                            Delivery by{" "}
                            <span className="date">Sat, Jun 18</span> for
                            <span className="pin">Pincode 140406</span>
                            <span className="change">(Change)</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="exchange-section">
                    <Exchange />
                  </section>
                </section>
              </div>
              <div className="try-on-add-to-cart">
                <section className="try-on">TRY ON</section>
                <section className="add-to-cart">ADD TO CART</section>
              </div>
            </div>
          </div>
        </div>
      </DesktopMainProdWrapper>
    </>
  );
};

export default DesktopMainProduct;
