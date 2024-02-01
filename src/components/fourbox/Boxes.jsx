import React from "react";
import bar from "../../assets/boxes/bar.svg";
import cod from "../../assets/boxes/cod.svg";
import exchange from "../../assets/boxes/exchange.svg";
import hallmark from "../../assets/boxes/hallmark.svg";
import return1 from "../../assets/boxes/return1.svg";
import { BoxContainer, BoxWrapper } from "../../styles/fourbox/Boxes.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Boxes = () => {
  return (
    <>
      <BoxContainer>
        <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <BoxWrapper>
                <section className="box">
                  <img src={cod} alt="" />
                  <p>Cash on Delivery</p>
                  <img src={bar} alt="" />
                </section>
              </BoxWrapper>
            </SwiperSlide>
            <SwiperSlide>
              <BoxWrapper>
                <section className="box">
                  <img src={return1} alt="" />
                  <p>7 Days Return</p>
                  <img src={bar} alt="" />
                </section>
              </BoxWrapper>
            </SwiperSlide>
            <SwiperSlide>
              <BoxWrapper>
                <section className="box">
                  <img src={exchange} alt="" />
                  <p>Life Exchange</p>
                  <img src={bar} alt="" />
                </section>
              </BoxWrapper>
            </SwiperSlide>
            <SwiperSlide>
              <BoxWrapper>
                <section className="box">
                  <div className="img-container">
                    <img src={hallmark} alt="" />
                  </div>
                  <p>BIS Hallmark</p>
                  <img src={bar} alt="" />
                </section>
              </BoxWrapper>
            </SwiperSlide>
          </Swiper>
        </div>
      </BoxContainer>
    </>
  );
};

export default Boxes;
