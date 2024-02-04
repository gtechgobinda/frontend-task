import styled from "styled-components";

export const ProductWrapper = styled.div`
.lime-light-degree{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-inline:15px;
  .lime-light{
    font-size: 11px;
    font-weight: 500;
    background: linear-gradient(to right,rgba(229, 229, 229, 1),rgba(229, 229, 229, 0));
    padding: 10px 10px;
    border-radius: 5px;
  }
}
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
