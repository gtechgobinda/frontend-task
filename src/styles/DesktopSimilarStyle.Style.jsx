import styled from "styled-components";

export const DesktopSimilarStyleWrapper = styled.div`
  .similar-style {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    padding-inline: 20px;
    background-color: white;
    .text {
      display: flex;
      flex-direction: column;
      font-size: 13px;
      font-weight: 600;
      padding-left: 10px;
      gap: 1px;
      .similar {
        color: #fd9149;
        font-size: 20px;
        font-weight: 400;
      }
    }
    .discover-all {
      background: linear-gradient(to right, #f77433, #feaf38);
      border-radius: 5px;
      width: 130px;
      span {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 13px;
        font-weight: 600;
        padding: 10px 10px;
      }
    }
  }
`;
