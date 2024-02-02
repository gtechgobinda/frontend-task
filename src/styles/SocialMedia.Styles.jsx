import styled from "styled-components";

export const SocialMediaWrapper = styled.section`
  .main-container {
    padding: 15px 20px;
    .social-media-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin-block: 15px;
      p {
        font-size: 13px;
        font-weight: 600;
      }
      section {
        display: flex;
        gap: 10px;
      }
    }
    .similar-style {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 30px;
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
  }
`;
