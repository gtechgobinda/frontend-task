const MainWrapper = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

  * {
    font-family: "Inter", sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  .main-wrapper {
    @media only screen and (max-width: 767px) {
      .mobile-version {
        display: block;
      }
      .desktop-version {
        display: none;
      }
    }
    @media only screen and (min-width: 768px) {
      .mobile-version {
        display: none;
      }
      .desktop-version {
        display: block;
      }
    }
  }
`;