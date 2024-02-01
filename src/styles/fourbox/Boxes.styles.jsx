import styled from "styled-components";

export const BoxContainer = styled.div`
  div {
    padding-left: 5px;
    margin-top: 5px;
  }
`;

export const BoxWrapper = styled.div`
  .box {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    gap: 10px;
    width: 120px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px 5px;
    .img-container{
      width: 40px;
      img{
        width: 100%;
      }
    }
    p {
      font-size: 11px;
      font-weight: 400;
    }
  }
`;
