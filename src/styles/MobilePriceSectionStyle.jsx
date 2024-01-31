import styled from "styled-components";

export const MobPriceSecWrapper = styled.div`
  padding-inline: 20px;
  padding-block: 20px;
  background: linear-gradient(
    to bottom,
    rgba(248, 248, 248, 0.4),
    rgba(255, 213, 136, 0.4)
  );
  display: flex;
  flex-direction: column;
  gap: 10px;
  .price-section {
    display: flex;
    justify-content: start;
    align-items: end;
    gap: 5px;
    span {
      font-size: 20px;
      font-weight: 700;
      color: #f77433;
    }
    s {
      font-size: 12px;
      color: #bcb7b0;
    }
  }
  .mrp-text {
    font-size: 11px;
  }
  .offer-text {
    color: #17631e;
    font-size: 11px;
    width: 261px;
  }
  .delivery-section {
    margin-top: 10px;
    p {
      font-size: 13px;
      font-weight: 600;
    }
    .location-container {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #aa6f01;
      background-color: #ffd58840;
      padding-block: 15px;
      padding-inline: 10px;
      border-radius: 5px;
      section {
        display: flex;
        flex-direction: row;
        gap: 15px;
        font-size: 11px;
      }
      .change-pincode {
        font-size: 12px;
        font-size: 600;
      }
    }

    .delivery-container {
      margin-top: 15px;
      display: flex;
      flex-direction: row;
      gap: 5px;
      .delivery-container-text {
        display: flex;
        flex-direction: column;
        .text1 {
          font-size: 11px;
          font-weight: 700;
        }
        .text2 {
          font-size: 9px;
        }
      }
    }
  }
`;
