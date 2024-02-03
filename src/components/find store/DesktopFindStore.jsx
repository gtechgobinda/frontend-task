import React from "react";
import { DeskFindStoreWrapper } from "../../styles/find store/DesktopFindStore.Styles";
const DesktopFindStore = () => {
  return (
    <DeskFindStoreWrapper>
      <div className="main-location-section">
        <div className="div">
          <section className="findstore-text-section">
            <p className="text1">Find in Store near you!</p>
            <p className="text2">
              Have to see it to believe it? Check here if the design is
              available in the store or not. You can also book an appointment
            </p>
            <input type="text" placeholder="Enter Pincode" />
            <section className="view-store-btn">
                <span className="btn">View Store & Design</span>
            </section>
          </section>
        </div>
      </div>
    </DeskFindStoreWrapper>
  );
};

export default DesktopFindStore;
