import React from "react";
import ring from "../assets/ring.svg";
import { RingWrapper } from "../styles/MoreRings.Styles";

const MoreRings = () => {
  return (
    <>
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
    </>
  );
};

export default MoreRings;
