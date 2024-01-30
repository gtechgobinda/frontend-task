import styled from "styled-components";

export const ProductWrapper = styled.div`
  .ring-band-img {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    img {
      width: 100%;
    }
  }
  .product-swipe-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -40px;
    padding-inline: 20px;
    section {
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25px;
        img {
          width: 100%;
        }
      }
    }
    .miniProduct-section {
      div {
        width: 25px;
        border: 1px solid #c4c4c4;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
    }
    .playSection {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
    }
  }
  .zoom-text {
    background: linear-gradient(to right, #ffd588, #e5e5e5, #ffd588);
    font-size: 8px;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
  }
`;
