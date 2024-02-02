import styled from "styled-components";

export const MobFindStoreCardWrapper = styled.section`
  .main-card {
    width: 288px;
    height: 166px;
    border: 1px solid white;
    border-radius: 10px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    .card-container {
      background: linear-gradient(to right, #fde3e3, #ffd588);
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      padding: 10px 15px;
      display: flex;
      flex-direction: column;
      gap: 9px;
      .name-call-wp {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 11px;
        font-weight: 700;
        .call-wp {
          display: flex;
          flex-direction: row;
          gap: 5px;
        }
      }
      .address {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        font-size: 9px;
        font-weight: 400;
      }
      .show-store-details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 11px;
        font-weight: 700;
      }
      .eight-size-book-visit {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .eight-size {
          display: flex;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2px;
          .eight {
            background: linear-gradient(
              to right,
              rgba(255, 222, 106, 0.74),
              rgba(253, 145, 73, 0.74)
            );

            border-radius: 50%;

            span {
              width: 7px;
              padding: 6px;
              font-weight: 700;
              font-size: 11px;
            }
          }
          .size {
            font-size: 11px;
            font-weight: 400;
          }
        }
        .book-visit {
          font-size: 11px;
          font-weight: 600;
          background-color: white;
          padding: 0px 10px;
          border: 1px solid #d1cfcf;
          border-radius: 10px;
        }
      }
    }
    .view-all-design {
      display: flex;
      justify-content: end;
      font-size: 11px;
      font-weight: 700;
      background: linear-gradient(to right, #ffd588, #fde3e3);
      padding:10px 20px;
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
    }
  }
`;
