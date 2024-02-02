import styled from "styled-components";

export const StickyAddToCartWrapper = styled.div`
  .main-add-to-cart {
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 100%;
    gap: 20px;
    padding: 20px 10px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    .wishlist {
      background-color: rgba(255, 213, 136, 0.35);
      border-radius: 5px;
      img {
        padding: 10px;
      }
    }
    .add-to-cart {
      background: linear-gradient(
        to right,
        rgba(253, 145, 73, 1),
        rgba(255, 213, 136, 1)
      );
      padding: 10px 40px;
      border-radius: 5px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .add-to-cart-btn {
        font-size: 16px;
        font-weight: 700;
        color: white;
      }
    }
  }
`;