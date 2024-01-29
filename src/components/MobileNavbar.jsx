import React from "react";
import { VscThreeBars } from "react-icons/vsc";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { PiHandbagLight } from "react-icons/pi";
import  companyLogo  from "../assets/companyLogo.svg";
const MobileNavbar = () => {
  return (
    <>
      <nav>
        <VscThreeBars />
        <img src={companyLogo} alt="" />
        <IoIosSearch />
        <FaRegHeart />
        <PiHandbagLight />
      </nav>
    </>
  );
};

export default MobileNavbar;
