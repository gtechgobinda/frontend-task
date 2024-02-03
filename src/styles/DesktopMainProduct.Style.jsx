import styled from "styled-components";

export const DesktopMainProdWrapper = styled.div`
  .desktop-prod-wrapper {
    .main-product-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 30px;
      padding: 20px 30px;
      .desktop-main-product-wrapper {
        .path-text {
          margin-bottom: 10px;
          font-size: 11px;
          font-weight: 500;
        }
        .desktop-main-product {
          border: 1px solid #e0e0e0;
          width: 590px;
        }
      }

      .product-name-and-customization {
        background: linear-gradient(
          to right bottom,
          rgba(248, 248, 248, 1),
          rgba(255, 255, 255, 0.89),
          rgba(255, 222, 106, 0.74)
        );
        border-radius: 5px;
        overflow: hidden;

        .extra-container {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 20px;
          width: 732px;
          height: 550px;
          .product-name-wishlist-share {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .product-name {
              font-weight: 600;
              font-size: 20px;
            }
            .wishlist-share {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              gap: 10px;
            }
          }
          .customization-section-and-exchange-section {
            display: flex;
            flex-direction: row;
            gap: 30px;
            section {
              .product-sub-name {
                font-size: 11px;
                font-weight: 400;
                color: #f77433;
              }
              .price-mrp-customization-delivery-text-all {
                display: flex;
                flex-direction: column;
                gap: 15px;
                .price-mrp {
                  margin-top: 10px;
                  display: flex;
                  flex-direction: column;
                  gap: 10px;

                  .price-all {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    .price {
                      font-size: 18px;
                      font-weight: 800;
                    }
                    .actual-price {
                      font-size: 15px;
                      font-weight: 700;
                      color: #bcb7b0;
                    }
                    .save {
                      font-size: 11px;
                      font-weight: 500;
                      background-color: rgba(196, 196, 196, 0.15);
                      padding: 2px 10px;
                    }
                  }
                  .mrp-flat {
                    display: flex;
                    flex-direction: row;
                    gap: 20px;
                    .mrp {
                      font-size: 11px;
                      font-weight: 400;
                    }
                    .flat {
                      font-size: 10px;
                      font-weight: 700;
                      color: #d91212;
                    }
                  }
                }
                .customization-delivery-text-all {
                  display: flex;
                  flex-direction: column;
                  gap: 20px;
                  .customization-container {
                    .customization-text {
                      color: #f77433;
                      font-size: 13px;
                      font-weight: 600;
                    }
                    .options-arrow {
                      display: flex;
                      flex-direction: row;
                      justify-content: space-between;
                      align-items: center;
                      border: 1px solid #f77433;
                      padding: 10px 15px;
                      border-radius: 5px;
                      margin-top: 5px;
                      .options {
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        gap: 10px;
                        font-size: 10px;
                        font-weight: 700;
                        span {
                          background-color: rgba(255, 213, 136, 0.25);
                          padding: 5px 10px;
                          border-radius: 50px;
                        }
                      }
                    }
                  }
                  .check-delivery-date-container {
                    .top-text {
                      display: flex;
                      flex-direction: row;
                      justify-content: space-between;
                      align-items: center;
                      .check-delivery-date {
                        font-size: 13px;
                        font-weight: 600;
                      }
                      .locate-me {
                        font-size: 11px;
                        font-weight: 600;
                        color: #feaa6f;
                      }
                    }
                    .location-input-submit {
                      margin-top: 5px;
                      display: flex;
                      flex-direction: row;
                      justify-content: space-between;
                      align-items: center;
                      border: 1px solid #f77433;
                      border-radius: 5px;
                      padding-left: 5px;

                      .location-input {
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        gap: 5px;
                        input {
                          border: none;
                          outline: none;
                          width: 100%;
                          &::placeholder {
                            color: black;
                          }
                        }
                      }
                      .submit {
                        button {
                          border: none;
                          background: linear-gradient(
                            to left,
                            #f77433,
                            #feaf38
                          );
                          color: white;
                          font-size: 13px;
                          font-weight: 700;
                          padding: 10px 15px;
                        }
                      }
                    }
                  }
                  .delivery-text-img {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    gap: 5px;
                    margin-top: 10px;
                    .delivery-text {
                      font-size: 11px;
                      font-weight: 600;
                      .date,
                      .pin {
                        color: #2d9043;
                      }
                      .date,
                      .pin,
                      .change {
                        font-weight: 800;
                      }
                    }
                  }
                }
              }
            }
            .exchange-section {
            }
          }
        }
        .try-on-add-to-cart {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          color: white;
          font-size: 13px;
          font-weight: 800;
          .try-on {
            background: linear-gradient(to bottom, #f77433, #feaf38);
            padding: 20px 90px;
            border-top-right-radius: 90px;
          }
          .add-to-cart {
            background: linear-gradient(to bottom, #f77433, #feaf38);
            padding: 20px 70px;
            border-top-left-radius: 90px;
          }
        }
      }
    }
  }
`;
