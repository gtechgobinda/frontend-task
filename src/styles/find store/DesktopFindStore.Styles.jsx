import styled from "styled-components";
import bigmap from "../../assets/bigmap.svg";
export const DeskFindStoreWrapper = styled.section`
  .main-location-section {
    background-image: url(${bigmap});
    padding: 20px 0px;
    padding-bottom: 100px;
    background-repeat: no-repeat;
    .div {
      background-color: white;
      margin-inline: auto;
      width: 500px;
      height: 387px;
      border-radius: 5px;
    }
    .findstore-text-section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      height: 50vh;
      .text1 {
        font-size: 18px;
        font-weight: 500;
      }
      .text2 {
        font-size: 11px;
        font-weight: 400;
        max-width: 295px;
        text-align: center;
      }
      input {
        border: 1px solid #d1cfcf;
        outline: none;
        width: 275px;
        padding: 5px 15px;
        &::placeholder {
          font-size: 13px;
          color: #807F7F;
        }
      }
      
    }
  }
  .view-store-btn{
        background:linear-gradient(to right,rgba(253, 145, 73, 1),rgba(255, 222, 106, 0.74));
        border-radius: 5px;
        .btn{
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 13px;
          padding: 10px 15px;
        }
      }
`;
