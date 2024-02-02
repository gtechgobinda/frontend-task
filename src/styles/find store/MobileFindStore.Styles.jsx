import styled from "styled-components";
import map2 from "../../assets/map2.png"
export const MobFindStoreWrapper = styled.section`
  .main-location-section {
    background-image: url(${map2});
    padding: 20px 0px;
    padding-bottom: 100px;
    .bg-location {
      background-color: white;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
      margin-inline: 15px;
      padding: 70px 0px;
      border-radius: 15px;
      .findstore-text-section {
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        gap: 15px;
        .text1 {
          font-size: 13px;
          font-weight: 600;
        }
        .text2 {
          font-size: 10px;
          font-weight: 400;
          max-width: 295px;
          text-align: center;
        }
        input {
          border: 1px solid #d1cfcf;
          outline: none;
          width: 155px;
          padding: 5px 15px;
          &::placeholder {
            font-size: 8px;
            color: #f77433;
          }
        }
      }
      .swipeSection {
        margin-top: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
      }
    }
  }
`;
