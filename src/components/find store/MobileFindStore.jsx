import React from "react";
import { MobFindStoreWrapper } from "../../styles/find store/MobileFindStore.Styles";
import call from "../../assets/call.svg";
import wp from "../../assets/wp.svg";
import leftarrow from "../../assets/leftarrow.svg";
import rightarrow from "../../assets/rightarrow.svg";
import MobileFindStoreCard from "./MobileFindStoreCard";
const MobileFindStore = () => {
  return (
    <>
      <MobFindStoreWrapper>
        <div>
          <div className="bg-location">
            <section className="findstore-text-section">
              <p className="text1">Find in Store near you!</p>
              <p className="text2">
                Have to see it to believe it? Check here if the design is
                available in the store or not. You can also book an appointment
              </p>
              <input type="text" placeholder="Enter Pincode" />
            </section>
            <div className="swipeSection">
              <img src={leftarrow} alt="" />
              <div>
                <MobileFindStoreCard />
              </div>
              <img src={rightarrow} alt="" />
            </div>
          </div>
        </div>
      </MobFindStoreWrapper>
    </>
  );
};

export default MobileFindStore;
