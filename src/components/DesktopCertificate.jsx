import React from "react";
import {
  AllCertifyWrapper,
  MobCertifyWrapper,
} from "../styles/MobileCertificate.Styles";
import igilogo from "../assets/igilogo.svg";
import bislogo from "../assets/bis-color.svg";
import garnetlogo from "../assets/garnetlogo2.svg";
import { DesktopCertifyWrapper } from "../styles/DesktopCertificate.Styles.jsx";
import { AllDesktopCertifyWrapper } from "../styles/DesktopCertificate.Styles.jsx";
const DesktopCertifate = () => {
  return (
    <>
      <DesktopCertifyWrapper>
        <AllDesktopCertifyWrapper>
          <div className="certify-container">
            <div className="certify-heading">
              <section className="bis-certified">
                <img src={bislogo} alt="" />
                <span>BIS Hall Marked</span>
              </section>
              <section className="igi-certified">
                <img src={igilogo} alt="" />
                <span>IGI Certified</span>
              </section>
              <section>
                <img src={garnetlogo} alt="" />
                <span>SGL</span>
              </section>
            </div>

            <div className="certify-text-container">
              <div className="all-text">
                <p>
                  The International Gemological Institute (IGI) is the world’s
                  largest independent gem certification and appraisal institute.
                  The IGI is worldwide renowned for its quality services,
                  extensive experience and know-how.
                </p>
                <p>
                  IGI has established a network of 18 laboratories and
                  gemological schools around the world located in the major
                  diamonds hubs.
                </p>
                <p>
                  The IGI Report or IGI certificate is an international passport
                  which gives an accurate and unbiased opinion of diamonds (and
                  other precious stones) based on the 4 C’s: cut, color, clarity
                  and carat weight.
                </p>
              </div>
            </div>
          </div>
        </AllDesktopCertifyWrapper>
      </DesktopCertifyWrapper>
    </>
  );
};

export default DesktopCertifate;
