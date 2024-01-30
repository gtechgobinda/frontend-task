import React from "react";
import { VscThreeBars } from "react-icons/vsc";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { PiHandbagLight } from "react-icons/pi";
import companyLogo from "../assets/companyLogo.svg";
import styled from "styled-components";
import { Wrapper } from "../styles/MobileNavbarStyle";
const MobileNavbar = () => {
  return (
    <>
      <Wrapper>
        <div className="Mobile-nav-conatiner">
          <section>
            <VscThreeBars className="three-bars" size={25} />
          </section>
          <section className="heading-section-container">
            <img src={companyLogo} alt="" />
            <section className="heading-section">
              <span className="title">GARNET LANEE</span>
              <span className="sub-title">
                Dazzling you Today, Tomorrow & Forever
              </span>
            </section>
          </section>
          <section className="left-icons">
            <IoIosSearch size={20} />
            <CiHeart size={22} />
            <PiHandbagLight size={20} />
          </section>
        </div>
      </Wrapper>
    </>
  );
};



export default MobileNavbar;
