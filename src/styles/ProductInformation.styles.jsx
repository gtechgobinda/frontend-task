import styled from "styled-components";

export const ProductInfoWrapper = styled.section`
  .main-product-info {
    padding: 15px 20px;
    .product-info-heading {
      display: flex;
      gap: 5px;
      font-size: 13px;
      font-weight: 600;
      color: #f77433;
      margin-bottom: 10px;
    }
    .dimension-wight-purity {
      display: flex;
      flex-direction: row;
      gap: 40px;
      .dimension {
        display: flex;
        flex-direction: column;
        font-size: 9px;
        font-weight: 400;
        color: #302f2f;
        .dimension-heading {
          font-size: 11px;
          font-weight: 700;
          margin-bottom: 5px;
        }
      }
      .wight-purity {
        font-size: 9px;
        font-weight: 400;
        border-left: 1px solid #e2e2e2;
        padding-left: 10px;
        .wight-heading {
          font-size: 11px;
          font-weight: 700;
        }
        .purity-heading {
          font-size: 11px;
          font-weight: 700;
        }
      }
    }
    .diamonds-gemstones {
      margin-top: 10px;
      .heading {
        font-size: 13px;
        font-weight: 700;
      }
      section {
        font-size: 9px;
        font-weight: 400;
        display: flex;
        flex-direction: row;
        gap: 20px;
      }
    }
  }
`;
