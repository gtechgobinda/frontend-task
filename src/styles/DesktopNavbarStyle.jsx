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
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(to right, #fef8ec, #ffffff, #f9e7c4, #fdefd3);
    padding-inline: 15px;
    padding-block: 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
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
      justify-content: center;
      align-items: center;
      border: 1px solid #ff8a00;
      border-radius: 40px;
      padding-inline: 10px;
      padding-block: 5px;
      background-color: white;
      width: 350px;
      /* width: 100%; */
      height: 30px;

      input {
        border: none;
        outline: none;
        border-right: 1px solid gray;
        background-color: white;
        width: 100%;
      }
      .search {
        margin-left: 5px;
      }
    }
    .more-icons-container {
      display: flex;
      flex-direction: row;
      gap: 10px;
      section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-right: 1px solid #efefef;
        padding-right: 10px;
        span {
          font-size: 9px;
        }
      }
    }

    .user-container {
      padding-left: 15px;
      section {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding-bottom: 10px;
        border-bottom: 4px solid #ff8a00;
        div {
          background-color: #dfe1df;
          width: 20px;
          height: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
        }
        span {
          display: block;
        }
      }
    }
  }
`;
