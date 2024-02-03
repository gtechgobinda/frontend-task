import React from "react";
import { ExchangeWrapper } from "../styles/Exchange.Style";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
const Exchange = () => {
  return (
    <>
      <ExchangeWrapper>
        <div className="main-exchange">
          <IoIosArrowUp color="#FEAA6F"size={20}/>
          <section className="main-exchange-section1">
            <section className="text">
              <p className="old-gold-exchange">Old Gold Exchange</p>
              <p>Now Exchange your old jewellery with a 0% deduction</p>
            </section>
            <p className="more">More&gt;</p>
          </section>
          <section className="main-exchange-section2">
            <section className="text">
              <p className="old-gold-exchange">Old Gold Exchange</p>
              <p>Now Exchange your old jewellery with a 0% deduction</p>
            </section>
            <section className="more-arrow">
              <p className="more">More&gt;</p>
              <section className="arrow">
                <FaArrowRight color="white" size={15} />
              </section>
            </section>
          </section>
          <section className="main-exchange-section3">
            <section className="text">
              <p className="old-gold-exchange">Old Gold Exchange</p>
              <p>Now Exchange your old jewellery with a 0% deduction</p>
            </section>
            <p className="more">More&gt;</p>
          </section>
          <IoIosArrowDown color="#FEAA6F"size={20}/>
        </div>
      </ExchangeWrapper >
    </>
  );
};

export default Exchange;
