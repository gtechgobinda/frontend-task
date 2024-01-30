import styled from "styled-components";

export const DesktopNavbarWrapper = styled.nav`
  .topSection {
    background: linear-gradient(to right, #ff7e5f, #feb47b);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 24px;
    padding-inline: 10px;
    .main-text {
      display: flex;
      align-items: center;
      font-size: 9px;
      span {
        color: #531cc6;
      }
    }
    .sidetext {
      display: flex;
      align-items: center;
      flex-direction: row;
      color: white;
      font-size: 11px;
      gap: 5px;
    }
  }
  .nav-container {
    display: flex;
    .logo-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
      img {
        width: 30px;
      }
      .logoText-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        .logoText {
          font-size: 25px;
          font-weight: 500;
        }
        .subtext {
          font-size: 9px;
        }
      }
    }
    .search-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      border: 1px solid #ff8a00;
      border-radius: 40px;
      padding-inline: 10px;
      padding-block: 5px;
      input {
        border: none;
        outline: none;
        border-right: 1px solid gray;
      }
      .search {
        margin-left: 5px;
      }
    }
  }
`;
