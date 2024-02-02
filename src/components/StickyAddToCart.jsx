import React from "react";
import styled from "styled-components";
import addtocart from "../assets/addtocart.svg";
import heart from "../assets/brownheart.svg";
import { StickyAddToCartWrapper } from "../styles/StickyAddToCart.Style";
export const StickyAddToCart = () => {
  return (
    <>
      <StickyAddToCartWrapper>
        <div className="main-add-to-cart">
          <section className="wishlist">
            <img src={heart} alt="" />
          </section>
          <section className="add-to-cart">
            <span>
              <img src={addtocart} alt="" />
            </span>
            <span className="add-to-cart-btn">ADD TO CART</span>
          </section>
        </div>
      </StickyAddToCartWrapper>
    </>
  );
};


