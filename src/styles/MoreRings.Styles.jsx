import styled from "styled-components";

export const RingWrapper = styled.div`
  .ring-container {
    display: flex;
    flex-direction: column;
    padding: 15px 20px;
    .heading-text {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 10px;
      .more-rings {
        font-size: 13;
        font-weight: 600;
      }
      .view-all{
        font-size: 11px;
        font-weight: 600;
        color: rgba(247, 116, 51, 1);
      }
    }
    .img-section {
      display: flex;
      flex-direction: row;
      gap: 15px;
    }
  }
`;
