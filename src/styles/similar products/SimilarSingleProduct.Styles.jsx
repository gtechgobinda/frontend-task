import styled from "styled-components";

export const SingleProductWrapper = styled.section`
  .main-product {
    width: 180px;
    border-radius: 10px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    /* padding: 10px; */
    .product-upper-section {
        padding: 10px;
      .trending-wishlist {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .trending {
          background: linear-gradient(
            to right,
            rgba(229, 229, 229, 0.5),
            rgba(229, 229, 229, 1)
          );
          width: 64px;
          padding: 10px 15px;
          border-radius: 20px;
          p {
            font-size: 7px;
            font-weight: 500;
          }
        }
      }
      .main-img {
        width: 178px;
        height: 160px;
      }
      .main-text-group {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .main-text {
          .price {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 5px;
            span {
              font-size: 13px;
              font-weight: 600;
            }
            s {
              font-size: 11px;
              font-weight: 600;
            }
          }
          .name {
            font-size: 11px;
            font-weight: 400;
          }
          .off {
            font-size: 8px;
            font-weight: 600;
            color: #16a06f;
          }
        }
      }
    }
    .bottom-text {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .similar-text {
        display: flex;
        align-items: center;
        p {
          font-size: 11px;
          font-weight: 400;
        }
      }
      .buy-now {
        font-size: 11px;
        font-weight: 600;
        background: linear-gradient(to right, #f77433, #feaf38);
        border-top-left-radius:30px;
        padding: 10px 25px;
      }
    }
  }
`;
