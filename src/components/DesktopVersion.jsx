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
          <DesktopCombinationAndMoreRings />
          <DesktopPriceBreakupTable />
          <DesktopCertifate />
          <DesktopSocialMedia/>
          <DesktopSimilarStyle />
          <DesktopSimilarProducts />
          <DesktopCompleteLook />
          <DesktopSimilarProducts />
          <DesktopFindStore/>
          <Footer/>
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
import DesktopSimilarProducts from "./DesktopSimilarProducts";
import DesktopCompleteLook from "./DesktopCompleteLook";
import DesktopFindStore from "./find store/DesktopFindStore";
import Footer from "./Footer";
import DesktopSocialMedia from "./DesktopSocialMedia";

export const DesktopContainerWrapper = styled.section`
  .desktop-container {
  }
`;
