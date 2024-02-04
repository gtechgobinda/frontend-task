import React from "react";
import goldRates from "../assets/footer/gold-rates.svg";
import fb from "../assets/footer/fb.svg";
import insta from "../assets/footer/insta.svg";
import yt from "../assets/footer/yt.svg";
import playstore from "../assets/footer/googleplay.png";
import appstore from "../assets/footer/appstore.svg";
import icons from "../assets/footer/icons.svg";
import { FooterWrapper } from "../styles/Footer.Styles";

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
                <img src={goldRates} alt="" />
                <p>GOLD RATES</p>
              </section>
              <section className="footer-text">
                <img src={goldRates} alt="" />
                <p>DIGITAL GOLD</p>
              </section>
              <section className="footer-text">
                <img src={goldRates} alt="" />
                <p>VARIOUS PAYMENT METHOD</p>
              </section>
              <section className="footer-text">
                <img src={goldRates} alt="" />
                <p>FINANCING OPTIONS</p>
              </section>
              <section className="footer-text">
                <img src={goldRates} alt="" />
                <p>GARNET LANEE ASSURANCE</p>
              </section>
              <section className="footer-text">
                <img src={goldRates} alt="" />
                <p>FRANCHISE ENQUIRY</p>
              </section>
            </div>
          </div>
          {/* col-2  */}
          <div className="footer-column col2">
            <p className="footer-heading">OUR POLICIES</p>
            <div className="footer-content">
              <section className="footer-text">
                <img src={goldRates} alt="" />
                <p>GOLD RATES</p>
              </section>
              <section className="footer-text">
                <img src={goldRates} alt="" />
                <p>GOLD RATES</p>
              </section>
              <section className="footer-text">
                <img src={goldRates} alt="" />
                <p>GOLD RATES</p>
              </section>
              <section className="footer-text">
                <img src={goldRates} alt="" />
                <p>GOLD RATES</p>
              </section>
              <section className="footer-text">
                <img src={goldRates} alt="" />
                <p>GOLD RATES</p>
              </section>
              <section className="footer-text">
                <img src={goldRates} alt="" />
                <p>GOLD RATES</p>
              </section>
            </div>
          </div>
          {/* col-3  */}
          <div className="footer-column col3">
            <p className="footer-heading">JEWELLERY KNOWLEDGE</p>
            <div className="footer-content">
              <section className="footer-text">
                <img src={goldRates} alt="" />
                <p>GOLD RATES</p>
              </section>
              <section className="footer-text">
                <img src={goldRates} alt="" />
                <p>GOLD RATES</p>
              </section>
              <section className="footer-text">
                <img src={goldRates} alt="" />
                <p>GOLD RATES</p>
              </section>
              <section className="footer-text">
                <img src={goldRates} alt="" />
                <p>GOLD RATES</p>
              </section>
              <section className="footer-text">
                <img src={goldRates} alt="" />
                <p>GOLD RATES</p>
              </section>
              <section className="footer-text">
                <img src={goldRates} alt="" />
                <p>GOLD RATES</p>
              </section>
            </div>
          </div>
          {/* col-4  */}
          <div className="footer-column col4">
            <p className="footer-heading">ABOUT US</p>
            <div className="footer-content">
              <section className="footer-text">
                <img src={goldRates} alt="" />
                <p>GOLD RATES</p>
              </section>
              <section className="footer-text">
                <img src={goldRates} alt="" />
                <p>GOLD RATES</p>
              </section>
              <section className="footer-text">
                <img src={goldRates} alt="" />
                <p>GOLD RATES</p>
              </section>
              <section className="footer-text">
                <img src={goldRates} alt="" />
                <p>GOLD RATES</p>
              </section>
              <section className="footer-text">
                <img src={goldRates} alt="" />
                <p>GOLD RATES</p>
              </section>
              <section className="footer-text">
                <img src={goldRates} alt="" />
                <p>GOLD RATES</p>
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
                <img src={goldRates} alt="" />
                <p>99888-98866</p>
              </section>
              <section className="footer-text">
                <img src={goldRates} alt="" />
                <p>info@garnetlanee.com</p>
              </section>
              <section className="footer-text">
                <img src={goldRates} alt="" />
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
