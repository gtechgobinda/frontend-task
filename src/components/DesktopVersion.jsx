import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import DesktopMainProduct from "./DesktopMainProduct";
import ProductInfoAndFourBox from "./ProductInfoAndFourBox";

const DesktopVersion = () => {
  return (
    <>
      <DesktopContainerWrapper>
        <DesktopNavbar />
        <div className="desktop-container">
          <DesktopMainProduct />
          <ProductInfoAndFourBox />
          {/* <CombinationBox />
        <MoreRings />
        <PriceBreakupTable />
        <MobileCertifate />
        <SocialMedia />
        <MobileAllSimilarProducts />
        <MobileFindStore />
        <StickyAddToCart /> */}
        </div>
      </DesktopContainerWrapper>
    </>
  );
};

export default DesktopVersion;

import styled from "styled-components";

export const DesktopContainerWrapper = styled.section`
  .desktop-container {
  }
`;
