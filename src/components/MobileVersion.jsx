import React from "react";
import MobileNavbar from "./MobileNavbar";
import MainProduct from "./MainProduct";
import MobilePriceSection from "./MobilePriceSection";
import MobileCustomizeProduct from "./MobileCustomizeProduct";
import ProductInformation from "./ProductInformation";
import Boxes from "./fourbox/boxes";
import MoreRings from "./MoreRings";
import CombinationBox from "./CombinationBox";
import PriceBreakupTable from "./PriceBreakupTable";
import MobileCertifate from "./MobileCertifate";
import SocialMedia from "./SocialMedia";
import MobileAllSimilarProducts from "./similar products/MobileAllSimilarProducts";
import MobileFindStore from "./find store/MobileFindStore";
import { StickyAddToCart } from "./StickyAddToCart";

const MobileVersion = () => {
  return (
    <>
      <MobileNavbar />
      <MainProduct />
      <MobilePriceSection />
      <MobileCustomizeProduct />
      <ProductInformation />
      <Boxes />
      <CombinationBox/>
      <MoreRings/>
      <PriceBreakupTable/>
      <MobileCertifate/>
      <SocialMedia/>
      <MobileAllSimilarProducts/>
      <MobileFindStore/>
      <StickyAddToCart/>
    </>
  );
};

export default MobileVersion;
