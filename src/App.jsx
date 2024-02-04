import React from "react";
import styled from "styled-components";
import DesktopVersion from "./components/DesktopVersion";
import MobileVersion from "./components/MobileVersion";
import {MainWrapper } from "./App.Styles"
const App = () => {
  return (
    <>
      <MainWrapper>
        <div className="main-wrapper">
          <div className="mobile-version">
            <MobileVersion />
          </div>
          <div className="desktop-version">
            <DesktopVersion />
          </div>
        </div>
      </MainWrapper>
    </>
  );
};


export default App;
