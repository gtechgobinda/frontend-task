import React from "react";
import { DesktopNavbarWrapper } from "../styles/DesktopNavbarStyle";
import { IoLocationOutline } from "react-icons/io5";
import CountryLogo from "../assets/country.svg";
import CompanyLogo from "../assets/companyLogo.svg";
import { IoIosSearch } from "react-icons/io";
import offer from "../assets/offer.svg";
import contactUs from "../assets/contact.svg";
import wishlist from "../assets/wishlist.svg";
import delivery from "../assets/delivery.svg";
import cart from "../assets/cart.svg";
import verify from "../assets/qr.svg";
import profile from "../assets/profile.svg";
const DesktopNavbar = () => {
  return (
    <>
      <DesktopNavbarWrapper>
        <div className="topSection">
          <section></section>
          <section className="main-text">
            Refer and earn extra discount &nbsp;<span> Click here...</span>
          </section>
          <section className="sidetext">
            <p>Pincode</p>
            <IoLocationOutline />
            <img src={CountryLogo} alt="countrylogo" />
          </section>
        </div>
        <div className="nav-container">
          <section className="logo-container">
            <img src={CompanyLogo} alt="company logo" />
            <span className="logoText-container">
              <span className="logoText">GARNET&nbsp;LANEE</span>
              <span className="subtext">
                Dazzling you Today, Tomorrow & Forever
              </span>
            </span>
          </section>

          <section className="search-container">
            <input type="text" placeholder="Search Products..." />
            <IoIosSearch className="search" />
          </section>

          <section className="more-icons-container">
            <section>
              <div>
                <img src={offer} alt="offer" />
              </div>
              <span>OFFERS</span>
            </section>
            <section>
              <div>
                <img src={contactUs} alt="offer" />
              </div>
              <span>CONTACT US</span>
            </section>
            <section>
              <div>
                <img src={wishlist} alt="offer" />
              </div>
              <span>WISHLIST</span>
            </section>
            <section>
              <div>
                <img src={delivery} alt="offer" />
              </div>
              <span>DELIVERY</span>
            </section>
            <section>
              <div>
                <img src={cart} alt="offer" />
              </div>
              <span>CART</span>
            </section>
            <section>
              <div>
                <img src={verify} alt="offer" />
              </div>
              <span>VERIFY REPORT</span>
            </section>
          </section>

          <section className="user-container">
            <section>
              <div>
                <img src={profile} alt="profile" />
              </div>
              <span>Hi, Ashish Sood</span>
            </section>
          </section>
        </div>
        <div className="category-section">
          <span>NEW ARRIVAL</span>
          <span>RINGS</span>
          <span>EARRINGS</span>
          <span>PENDANTS</span>
          <span>BRACELETS & BANGLES</span>
          <span>SOLITIARES</span>
          <span>GOLD COINS</span>
          <span>ALL JEWELLERY</span>
        </div>
      </DesktopNavbarWrapper>
    </>
  );
};

export default DesktopNavbar;
