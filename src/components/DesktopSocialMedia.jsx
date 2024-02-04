import React from "react";
import icons from "../assets/footer/icons.svg";
import { DesktopSocialMediaWrapper } from "../styles/DesktopSocialMedia.Styles";
const DesktopSocialMedia = () => {
  return (
    <>
      <DesktopSocialMediaWrapper>
        <div className="desktop-social-media">
          <p className="text1">100% Certified International Standard</p>
          <p className="text2">WE WOULD LOVE TO MEET YOU ON OUR HANDLES</p>
          <img src={icons} alt="" />
        </div>
      </DesktopSocialMediaWrapper>
    </>
  );
};

export default DesktopSocialMedia;
