import React from "react";
import { DesktopNavbarWrapper } from "../styles/DesktopNavbarStyle";
import { IoLocationOutline } from "react-icons/io5";
import CountryLogo from "../assets/country.svg";
import CompanyLogo from "../assets/companyLogo.svg";
import { IoIosSearch } from "react-icons/io";
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
              <span className="logoText">GARNET LANEE</span>
              <span className="subtext">Dazzling you Today, Tomorrow & Forever</span>
            </span>
          </section>
          <section className="search-container">
            <input type="text" placeholder="Search Products..."/>
            <IoIosSearch className="search"/>
          </section>
        </div>
      </DesktopNavbarWrapper>
    </>
  );
};

export default DesktopNavbar;
