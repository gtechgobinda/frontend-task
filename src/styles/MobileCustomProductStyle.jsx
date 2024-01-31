import styled from "styled-components";

export const MobCustomizeProductWrapper = styled.div`
  .main-customize-product-section {
    padding: 15px 20px;

    .main-text {
      font-size: 15px;
      font-weight: 700;
    }
    .sub-text {
      font-size: 13px;
      font-weight: 400;
      color: #f77433;
      margin-top: 2px;
    }
    .sub-text2 {
      font-size: 13px;
      font-weight: 700;
      color: rgba(0, 0, 0, 0.7);
      margin-top: 10px;
    }

    .details-option {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin-block: 15px;
      span {
        background-color: rgba(255, 213, 136, 0.25);
        padding-inline: 10px;
        padding-block: 4px;
        border-radius: 50px;
        font-size: 9px;
        font-weight: 700;
      }
    }
    .customize-section {
      .customize-title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-weight: 700;
        border: 1px solid #f77433;
        padding-inline: 20px;
        padding-block: 20px;
        border-radius: 10px;
        margin-block: 15px;
      }
      .selectSize {
        font-size: 13px;
        font-weight: 700;
        margin-block: 10px;
      }
      .selectSize-section {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .select {
          appearance: none;
          /* -webkit-appearance: none; */
          /* -moz-appearance: none; */
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          background-color: rgba(255, 213, 136, 0.35);
          width: 200px;
          font-size: 11px;
          font-weight: 700;
        }
        span {
          font-size: 13px;
          font-weight: 700;
          border: 1px solid #dadada;
          padding: 8px 20px;
          border-radius: 5px;
        }
      }
    }
  }
`;
