import styled from "styled-components";

export const CombinationBoxWrapper = styled.div`
  div {
    padding: 5px 10px;
    .heading {
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
      gap: 5px;

      .ready-to-shop {
        color: #f77433;
        font-size: 13px;
        font-weight: 600;
      }
    }
    p {
      font-size: 9px;
      font-weight: 400;
    }
  }
`;

export const ComSelectBoxWrapper = styled.section`
  .box-container {
    width: 150px;
  }
  .main-content {
    background-color: #f8f8f8;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px 0px;
    border: 1px solid white;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
  .row1,
  .row2,
  .row3 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .text1,
  .text2,
  .text3 {
    font-size: 11px;
  }
  img {
    width: 24px;
  }
  .kt-section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .kt-section span {
    font-size: 8px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 23px;
    width: 23px;
    font-size: 8px;
    border-radius: 50%;
    border: 2px solid #F9DCDB;
  }
  .select {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f77433;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border: 1px solid white;
    overflow: hidden;
  }
  .select span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    font-weight: 700;
  }

  .size {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .size span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    font-weight: 700;
    height: 23px;
    width: 23px;
    font-size: 8px;
    border-radius: 50%;
    background: linear-gradient(to right, rgba(255, 222, 106, 0.74), rgba(253, 145, 73, 0.74));
  }
`;
