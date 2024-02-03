import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MobileNavbar from "./components/MobileNavbar";
import DesktopNavbar from "./components/DesktopNavbar";
import MainProduct from "./components/MainProduct";
import MobilePriceSection from "./components/MobilePriceSection";
import MobileCustomizeProduct from "./components/MobileCustomizeProduct";
import ProductInformation from "./components/ProductInformation";
import Boxes from "./components/fourbox/boxes";
import CombinationBox from "./components/CombinationBox";
import MoreRings from "./components/MoreRings";
import PriceBreakupTable from "./components/PriceBreakupTable";
import MobileCertifate from "./components/MobileCertifate";
import SocialMedia from "./components/SocialMedia";
import SimilarSingleProduct from "./components/similar products/SimilarSingleProduct";
import MobileAllSimilarProducts from "./components/similar products/MobileAllSimilarProducts";
import MobileFindStore from "./components/find store/MobileFindStore";
import MobileFindStoreCard from "./components/find store/MobileFindStoreCard";
import { StickyAddToCart } from "./components/StickyAddToCart";
import DesktopMainProduct from "./components/DesktopMainProduct";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <MainWrapper>
        {windowWidth <= 767 ? <MobileNavbar /> : <DesktopNavbar />}
        {windowWidth <= 767 ? <MainProduct /> : <DesktopMainProduct/>}
        {/* <MainProduct /> */}
        {/* <DesktopMainProduct/> */}
        <MobilePriceSection />
        <MobileCustomizeProduct />
        <ProductInformation />
        <Boxes/>
        <CombinationBox/>
        <MoreRings/>
        <PriceBreakupTable/>
        <MobileCertifate/>
        <SocialMedia/>
        {/* <SimilarSingleProduct/> */}
        <MobileAllSimilarProducts/>
        <MobileFindStore/>
        {/* <MobileFindStoreCard/> */}
        <StickyAddToCart/>
      </MainWrapper>
    </>
  );
};

const MainWrapper = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

  * {
    font-family: "Inter", sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;
export default App;
