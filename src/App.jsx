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
        <MainProduct />
        <MobilePriceSection />
        <MobileCustomizeProduct />
        <ProductInformation />
        <Boxes/>
        <CombinationBox/>
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
