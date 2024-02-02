import React from "react";
import fb from "../assets/fb.svg";
import insta from "../assets/insta.svg";
import youtube from "../assets/youtube.svg";
import line from "../assets/line.svg";
import { SocialMediaWrapper } from "../styles/SocialMedia.Styles";
const SocialMedia = () => {
  return (
    <>
      <SocialMediaWrapper>
        <div className="main-container">
          <div className="social-media-container">
            <p>WE WOULD LOVE TO MEET YOU ON OUR HANDLES</p>
            <section>
              <img src={fb} alt="" />
              <img src={insta} alt="" />
              <img src={youtube} alt="" />
            </section>
          </div>
          <div className="similar-style">
            <section className="text">
              <span className="similar">SIMILAR</span>
              <span>STYLES</span>
            </section>
            <section>
              <img src={line} alt="" />
            </section>
          </div>
        </div>
      </SocialMediaWrapper>
    </>
  );
};

export default SocialMedia;
