import React from "react";
import { VscThreeBars } from "react-icons/vsc";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { PiHandbagLight } from "react-icons/pi";
import companyLogo from "../assets/companyLogo.svg";
import styled from "styled-components";
const MobileNavbar = () => {
  return (
    <>
      <Wrapper>
        <div>
          <VscThreeBars />
          <img src={companyLogo} alt="" />
          <section className="heading-section">
            <span className="title">GARNET LANEE</span>
            <span>Dazzling you Today, Tomorrow & Forever</span>
          </section>

          <IoIosSearch />
          <FaRegHeart />
          <PiHandbagLight />
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.nav``;

export default MobileNavbar;
