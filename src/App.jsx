import React from "react";
import styled from "styled-components";
import MobileNavbar from "./components/MobileNavbar";
import DesktopNavbar from "./components/DesktopNavbar";

const Title = styled.h1`
  font-size: 15px;
`;
const App = () => {
  return (
    <>
      <MainWrapper>
        {/* <MobileNavbar /> */}
        <DesktopNavbar/>
      </MainWrapper>
    </>
  );
};

const MainWrapper = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

  * {
    font-family: "Inter", sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;
export default App;
