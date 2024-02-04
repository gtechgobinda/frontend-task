import styled from "styled-components";

export const FooterWrapper = styled.div`
  .footer-container {
    font-size: 9px;
    font-weight: 600;
    color: rgba(48, 47, 47, 0.7);
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
    flex-wrap:wrap;
    padding-bottom: 40px;
  }
  .footer-heading {
    font-size: 15px;
    font-weight: 700;
    color: #fd9149;
  }
  .footer-column {
    display: flex;
    flex-direction: column;
    gap: 20px;
    &.col2,&.col3,&.col4,&.col5 {
      border-left: 1px solid #f8d686;
      padding-left: 20px;
    }
  }
  .footer-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .footer-text {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
  .copyright {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 9px;
    font-weight: 500;
    background: linear-gradient(to right, #fd9149, #ffde6a);
    p {
      padding-block: 15px;
    }
  }
  .download-text {
    font-size: 12px;
    font-weight: 600;
    color: rgba(48, 47, 47, 0.7);
  }
  .google-app-store{
    display: flex;
    gap: 10px;
  }
`;
