import styled from "styled-components";

export const AllSingleProductWrapper = styled.section`
  .two-products-container {
    padding: 20px 25px;
    background: linear-gradient(to left bottom, #f8f8f8, #ffd588);
    margin-block: 10px;
    .two-products {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
  }
  .similar-style {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 30px;
      padding: 15px 20px;
      .text {
        display: flex;
        flex-direction: column;
        font-size: 9px;
        font-weight: 600;
        border-left: 10px solid #fd9149;
        padding-left: 10px;
        gap: 10px;
        .similar {
          color: #fd9149;
          font-size: 12px;
          font-weight: 600;
        }
      }
    }
`;
