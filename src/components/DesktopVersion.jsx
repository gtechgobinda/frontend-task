import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import DesktopMainProduct from "./DesktopMainProduct";
import ProductInfoAndFourBox from "./ProductInfoAndFourBox";
import DesktopCombinationAndMoreRings from "./DesktopCombinationAndMoreRings";

const DesktopVersion = () => {
  return (
    <>
      <DesktopContainerWrapper>
        <DesktopNavbar />
        <div className="desktop-container">
          <DesktopMainProduct />
          <ProductInfoAndFourBox />
          <DesktopCombinationAndMoreRings/>
          <DesktopPriceBreakupTable/>
          {/* <MobileCertifate/> */}
          <SocialMedia/>
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
import PriceBreakupTable from "./PriceBreakupTable";
import MobileCertifate from "./MobileCertifate";
import SocialMedia from "./SocialMedia";
import DesktopPriceBreakupTable from "./DesktopPriceBreakupTable";


export const DesktopContainerWrapper = styled.section`

  .desktop-container {
  }
`;
