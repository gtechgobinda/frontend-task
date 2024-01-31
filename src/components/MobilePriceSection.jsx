import React from "react";
import deliveryBoy from "../assets/main product/delivery-boy.svg";
import location2 from "../assets/main product/location2.svg";
import { MobPriceSecWrapper } from "../styles/MobilePriceSectionStyle";

const MobilePriceSection = () => {
  return (
    <>
      <MobPriceSecWrapper>
        <section className="main-price-section">
        <div className="price-section">
          <span>₹34,948</span>
          <s>₹36,029</s>
        </div>
        <div className="mrp-text">MRP (Inclusive all Taxes)</div>
        <section className="offer-text">
          Flat 15% off on Diamond Prices + Get Rs.1000 Garnet Lanee Voucher with
          Your Order. TCA.
        </section>

        <div className="delivery-section">
          <p>Delivery Details</p>

          <section className="location-container">
            <section className="location">
              <img src={location2} alt="" />
              <span>Delivering to 140406</span>
            </section>
            <span className="change-pincode">Change Pincode</span>
          </section>

          <section className="delivery-container">
            <section>
              <img src={deliveryBoy} alt="" />
            </section>
            <section className="delivery-container-text">
              <span className="text1">Expected delivery by 16th to 17th Jan</span>
              <span className="text2">Order in next 5 Hrs 34 Mins, T&C</span>
            </section>
          </section>
        </div>
        </section>

      </MobPriceSecWrapper>
    </>
  );
};

export default MobilePriceSection;
