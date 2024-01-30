import React from "react";
import { VscThreeBars } from "react-icons/vsc";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { PiHandbagLight } from "react-icons/pi";
import companyLogo from "../assets/companyLogo.svg";
import styled from "styled-components";
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

const Wrapper = styled.nav`
  .Mobile-nav-conatiner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 12px;
    padding-block: 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    .heading-section-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      img {
        width: 34px;
      }
      .heading-section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .title {
          font-size: 25px;
          font-weight:500;
        }
        .sub-title {
          font-size: 9.5px;
        }
      }
    }
    .left-icons{
        display: flex;
        gap: 5px;
    }
  }
`;

export default MobileNavbar;
