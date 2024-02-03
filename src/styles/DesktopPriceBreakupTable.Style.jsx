import styled from "styled-components";

export const DesktopPriceTableWrapper = styled.div`
  .table-container {
    padding-inline: 20px;
    .price-breakup {
      font-size: 13px;
      font-weight: 500;
      margin-bottom: 15px;
      span {
        color: #fd9149;
        font-size: 10px;
      }
    }
    table {
      min-width: 100%;
      border-collapse: collapse;
      font-size: 16px;
      text-align: center;
    }
    thead {
      font-size: 16px;
      font-weight: 700;
      background: linear-gradient(
        to right,
        rgba(247, 116, 51, 1),
        rgba(254, 175, 56, 1)
      );
      color: white;
      height: 40px;
      padding-inline: 10px;
      text-align: center;
    }
    tbody {
      color: #807f7f;
      font-weight: 400;
      text-align: center;
    }
    .gold,
    .diamond {
      color: #f77433;
      font-size: 16px;
      font-weight: 700;
      margin-block: 10px;
    }
    .grand-total {
      /* display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end; */
      /* text-align:start */
    }
    .total-section {
      background-color: #fafafa;
      margin-top: 20px;
    }
    .total-section {
      background-color: #fafafa;
    }
    .certified {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 13px;
      font-weight: 500;
      color: #f77433;
      margin-top: 10px;
    }
    .info-img {
      img {
        width:5px;
      }
    }
  }
`;
