import styled from "styled-components";
// import map from "../../assets/map.svg"
import map from "../../assets/map.svg";
import location from "../../assets/main product/location2.svg";
export const MobFindStoreWrapper = styled.section`
  .bg-location {
    background-image: url("../../assets/map.svg");
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
      gap: 20px;
    }
  }
`;
