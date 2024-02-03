import styled from "styled-components";

export const ExchangeWrapper = styled.section`
.main-exchange{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    .main-exchange-section1 {
    width: 200px;
    border: 1px solid #eeeeee;
    border-left: 5px solid #eea09c;
    padding-left: 10px;
    padding-block: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: white;
    .text {
      width: 180px;
      font-size: 11px;
      font-weight: 500;
      display: flex;
      flex-direction: column;
      gap: 10px;
      .old-gold-exchange {
        font-size: 12px;
        font-weight: 700;
        color: #eea09c;
      }
    }
    .more {
      color: #eea09c;
      font-size: 11px;
      font-weight: 600;
    }
  }
  .main-exchange-section2 {
    width: 200px;
    border: 1px solid #eeeeee;
    border-left: 5px solid #fd9149;
    padding-left: 10px;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: white;
    .text {
      width: 180px;
      font-size: 11px;
      font-weight: 500;
      display: flex;
      flex-direction: column;
      gap: 10px;
      .old-gold-exchange {
        font-size: 12px;
        font-weight: 700;
        color: #fd9149;
      }
    }
    .more-arrow {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .more {
        color: #fd9149;
        font-size: 11px;
        font-weight: 600;
      }
      .arrow {
        background-color: #fd9149;
        padding: 5px 10px;
        border-top-left-radius: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .main-exchange-section3 {
    width: 200px;
    border: 1px solid #eeeeee;
    border-left: 5px solid #ffd588;
    padding-left: 10px;
    padding-block: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: white;
    .text {
      width: 180px;
      font-size: 11px;
      font-weight: 500;
      display: flex;
      flex-direction: column;
      gap: 10px;
      .old-gold-exchange {
        font-size: 12px;
        font-weight: 700;
        color: #ffd588;
      }
    }
    .more {
      color: #ffd588;
      font-size: 11px;
      font-weight: 600;
    }
  }
}
`;
