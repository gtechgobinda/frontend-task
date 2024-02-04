import React from "react";
import goldRates from "../assets/footer/gold-rates.svg";
import fb from "../assets/footer/fb.svg";
import insta from "../assets/footer/insta.svg";
import yt from "../assets/footer/yt.svg";
import playstore from "../assets/footer/googleplay.png";
import appstore from "../assets/footer/appstore.svg";
import icons from "../assets/footer/icons.svg";
import { FooterWrapper } from "../styles/Footer.Styles";
// ----------footer icons---------------
import digitalGold from "../assets/footer/our-services/digital-gold.svg";
import finalcingOptions from "../assets/footer/our-services/financing-options.svg";
import franchiseEnquiry from "../assets/footer/our-services/franchise-enquiry.svg";
import garnetLaneeAssurance from "../assets/footer/our-services/garnet-lanee-assurance.svg";
import variousPaymentMethod from "../assets/footer/our-services/various-payment-method.svg";

import dayReturns from "../assets/footer/our-policies/15-day-returns.svg";
import freeShipping from "../assets/footer/our-policies/free-shipping.svg";
import lifetimeExchangePolicy from "../assets/footer/our-policies/lifetime-exchange-policy.svg";
import returnAndRefundPolicy from "../assets/footer/our-policies/return-and-refund-policy.svg";
import termsAndConditionsForOffers from "../assets/footer/our-policies/terms-and-conditions-for-offers.svg";


import ourVision from "../assets/footer/about-us/our-vision.svg";
import whyGarnet from "../assets/footer/about-us/why-garnet.svg";
import blog from "../assets/footer/about-us/blog.svg";
import ourStory from "../assets/footer/about-us/our-story.svg";
import ourProcess from "../assets/footer/about-us/our-process.svg";
import ourTeam from "../assets/footer/about-us/our-team.svg";
import reviewAndRatings from "../assets/footer/about-us/review-and-ratings.svg";
import pressRelease from "../assets/footer/about-us/press-release.svg";


import goldGuide from "../assets/footer/jewellery-knowledge/gold-guide.svg";
import diamondGuide from "../assets/footer/jewellery-knowledge/diamond-guide.svg";
import jewellaryGuide from "../assets/footer/jewellery-knowledge/jewellary-guide.svg";
import solitiareDiamondGuide from "../assets/footer/jewellery-knowledge/solitiare-diamond-guide.svg";
import gemstoneGuide from "../assets/footer/jewellery-knowledge/gemstone-guide.svg";
import certificationGuide from "../assets/footer/jewellery-knowledge/certification-guide.svg";
import jewellaryGifting from "../assets/footer/jewellery-knowledge/jewellary-gifting.svg";


import location from "../assets/footer/get-in-touch/location.svg";
import wp from "../assets/footer/get-in-touch/wp.svg";
import email from "../assets/footer/get-in-touch/email.svg";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <div className="footer-container">
          {/* col-1  */}
          <div className="footer-column">
            <p className="footer-heading">OUR SERVICES</p>
            <div className="footer-content">
              <section className="footer-text">
                <img src={digitalGold} alt="" />
                <p>GOLD RATES</p>
              </section>
              <section className="footer-text">
                <img src={finalcingOptions} alt="" />
                <p>DIGITAL GOLD</p>
              </section>
              <section className="footer-text">
                <img src={variousPaymentMethod} alt="" />
                <p>VARIOUS PAYMENT METHOD</p>
              </section>
              <section className="footer-text">
                <img src={finalcingOptions} alt="" />
                <p>FINANCING OPTIONS</p>
              </section>
              <section className="footer-text">
                <img src={garnetLaneeAssurance} alt="" />
                <p>GARNET LANEE ASSURANCE</p>
              </section>
              <section className="footer-text">
                <img src={franchiseEnquiry} alt="" />
                <p>FRANCHISE ENQUIRY</p>
              </section>
            </div>
          </div>
          {/* col-2  */}
          <div className="footer-column col2">
            <p className="footer-heading">OUR POLICIES</p>
            <div className="footer-content">
              <section className="footer-text">
                <img src={dayReturns} alt="" />
                <p>15-DAY RETURNS</p>
              </section>
              <section className="footer-text">
                <img src={freeShipping} alt="" />
                <p>FREE SHIPPING</p>
              </section>
              <section className="footer-text">
                <img src={lifetimeExchangePolicy} alt="" />
                <p>LIFETIME EXCHANGE POLICY</p>
              </section>
              <section className="footer-text">
                <img src={returnAndRefundPolicy} alt="" />
                <p>RETURN AND REFUND POLICY</p>
              </section>
              <section className="footer-text">
                <img src={termsAndConditionsForOffers} alt="" />
                <p>TERMS & CONDITIONS FOR OFFERS</p>
              </section>
            </div>
          </div>
          {/* col-3  */}
          <div className="footer-column col3">
            <p className="footer-heading">JEWELLERY KNOWLEDGE</p>
            <div className="footer-content">
              <section className="footer-text">
                <img src={goldGuide} alt="" />
                <p>GOLD GUIDE </p>
              </section>
              <section className="footer-text">
                <img src={diamondGuide} alt="" />
                <p>DIAMOND GUIDE </p>
              </section>
              <section className="footer-text">
                <img src={jewellaryGuide} alt="" />
                <p>JEWELLERY GUIDE</p>
              </section>
              <section className="footer-text">
                <img src={solitiareDiamondGuide} alt="" />
                <p>SOLITIARE DIAMOND GUIDE</p>
              </section>
              <section className="footer-text">
                <img src={gemstoneGuide} alt="" />
                <p>GEMSTONE GUIDE </p>
              </section>
              <section className="footer-text">
                <img src={certificationGuide} alt="" />
                <p>CERTIFICATION GUIDE</p>
              </section>
              <section className="footer-text">
                <img src={jewellaryGifting} alt="" />
                <p>JEWELLERY GIFTING</p>
              </section>
            </div>
          </div>
          {/* col-4  */}
          <div className="footer-column col4">
            <p className="footer-heading">ABOUT US</p>
            <div className="footer-content">
              <section className="footer-text">
                <img src={ourVision} alt="" />
                <p>OUR VISION</p>
              </section>
              <section className="footer-text">
                <img src={whyGarnet} alt="" />
                <p>WHY GARNET</p>
              </section>
              <section className="footer-text">
                <img src={blog} alt="" />
                <p>BLOG</p>
              </section>
              <section className="footer-text">
                <img src={ourStory} alt="" />
                <p>OUR STORY</p>
              </section>
              <section className="footer-text">
                <img src={ourProcess} alt="" />
                <p>OUR PROCESS</p>
              </section>
              <section className="footer-text">
                <img src={ourTeam} alt="" />
                <p>OUR TEAM</p>
              </section>
              <section className="footer-text">
                <img src={reviewAndRatings} alt="" />
                <p>REVIEWS AND RATINGS</p>
              </section>
              <section className="footer-text">
                <img src={pressRelease} alt="" />
                <p>PRESS RELEASE</p>
              </section>
            </div>
          </div>
          {/* col-5  */}
          <div className="footer-column col5">
            <p className="footer-heading">Get In Touch</p>
            <div className="footer-content">
              <section className="footer-text">
                {/* <img src={goldRates} alt="" /> */}
                <p>Toll Free :1800-202-0270</p>
              </section>
              <section className="footer-text">
                {/* <img src={goldRates} alt="" /> */}
                <p>Monday to Saturday (10 AM to 7 PM)</p>
              </section>
              <section className="footer-text">
                <img src={wp} alt="" />
                <p>99888-98866</p>
              </section>
              <section className="footer-text">
                <img src={email} alt="" />
                <p>info@garnetlanee.com</p>
              </section>
              <section className="footer-text">
                <img src={location} alt="" />
                <p>Sco.19,Sector 82 JLPL Mohali Airport Road,160055.</p>
              </section>
            </div>
            <div className="social-media">
              <img src={icons} alt="" />
            </div>
            <p className="download-text">Download Our Application</p>
            <div className="google-app-store">
              <img src={playstore} alt="" />
              <img src={appstore} alt="" />
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>COPYRIGHT GARNET LANEE© 2023</p>
        </div>
      </FooterWrapper>
    </>
  );
};

export default Footer;
