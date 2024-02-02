import styled from "styled-components";

export const MobCertifyWrapper = styled.div`
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
`;

export const AllCertifyWrapper = styled.div`
  .certify-container {
    padding: 15px 20px;
    .certify-heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      section {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 10px;
        gap: 5px;
        span {
          font-size: 13px;
          font-weight: 300;
        }
      }
      .igi-certified {
        border-bottom: 4px solid #fd9149;
      }
    }
    .certify-text-container {
      margin-block: 10px;
      p {
        text-align: justify;
        font-size: 11px;
        font-weight: 300;
        margin-top: 10px;
      }
    }
  }
`;
