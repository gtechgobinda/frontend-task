import React from "react";
import { DesktopSimilarStyleWrapper } from "../styles/DesktopSimilarStyle.Style";
import bigline from "../assets/bigline.svg"
const DesktopSimilarStyle = () => {
  return (
    <>
      <DesktopSimilarStyleWrapper>
        <div className="similar-style">
          <section className="text">
            <span className="similar">SIMILAR</span>
            <span>STYLES</span>
          </section>

          <section className="line">
            <img src={bigline} alt="" />
          </section>

          <section className="discover-all">
            <span>Discover all &gt;&gt;</span>
          </section>
        </div>
      </DesktopSimilarStyleWrapper>
    </>
  );
};

export default DesktopSimilarStyle;
