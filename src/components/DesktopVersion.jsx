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
        <DesktopCertifate/>
          {/* <MobileCertifate/> */}
          <SocialMedia/>
          <DesktopSimilarStyle/>
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
import DesktopCertifate from "./DesktopCertificate";
import DesktopSimilarStyle from "./DesktopSimilarStyle";


export const DesktopContainerWrapper = styled.section`

  .desktop-container {
  }
`;
