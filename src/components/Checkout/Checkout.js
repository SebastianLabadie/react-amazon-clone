import React from "react";
import styled from "styled-components";
import BasketItem from "./BasketItem";
import Subtotal from "./Subtotal";
const CheckoutStyled = styled.div`
  display: flex;
  padding: 20px;
  background-color: white;
  height: max-content;

.checkout__ad{
    width:100%;
    margin-bottom:10px;
}

.checkout__title {
  margin-right: 10px;
  padding: 10px;
  border-bottom: 1px solid lightgray;
}

`;
function Checkout() {
  return (
    <CheckoutStyled>
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="banner"
        />
        <div className="">
            <h2 className="checkout__title">
                Your Shopping Basket
            </h2>
            <BasketItem />
        </div>
      </div>
      <div className="checkout__right">
          <Subtotal />
      </div>
    </CheckoutStyled>
  );
}

export default Checkout;
