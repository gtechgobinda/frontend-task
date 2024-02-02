import React from "react";
import call from "../../assets/call.svg";
import wp from "../../assets/wp.svg";
import { MobFindStoreCardWrapper } from "../../styles/find store/MobileFindStoreCard.Styles";
const MobileFindStoreCard = () => {
  return (
    <>
      <MobFindStoreCardWrapper>
        <div className="main-card">
          <div className="card-container">
            <section className="name-call-wp">
              <span className="name">Ram Nagar</span>
              <span className="call-wp">
                <img src={call} alt="" />
                <img src={wp} alt="" />
              </span>
            </section>
            <p className="address">
              <span>No.2, Villa Street, Near Jio</span>
              <span>Villupuram - 605 602</span>
            </p>
            <p className="show-store-details">
              <span>Show Store Details</span>
              <span>38KM</span>
            </p>
            <section className="eight-size-book-visit">
              <section className="eight-size">
                <span className="eight">
                  <span>8</span>
                </span>
                <span className="size">Size</span>
              </section>
              <span className="book-visit">Book Visit</span>
            </section>
            <p className="kt">18KT Yellow Gold GH-SI</p>
          </div>
          <p className="view-all-design">VIEW ALL DESIGN</p>
        </div>
      </MobFindStoreCardWrapper>
    </>
  );
};

export default MobileFindStoreCard;
