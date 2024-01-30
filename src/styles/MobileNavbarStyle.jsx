import styled from "styled-components";

export const Wrapper = styled.nav` 
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
            font-weight: 500;
          }
          .sub-title {
            font-size: 9.5px;
          }
        }
      }
      .left-icons {
        display: flex;
        gap: 5px;
      }
    }
  
`;
