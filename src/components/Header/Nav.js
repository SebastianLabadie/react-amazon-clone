import React from "react";
import styled from "styled-components";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const NavStyled = styled.div`
  display: flex;
  justify-content: space-evenly;

  .option {
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    color: #fff;
  }

  .line-one {
    font-size: 10px;
  }
  .line-two {
    font-size: 13px;
    font-weight: 800;
  }

  .basket{
      display:flex;
      align-items:center;
      color:#fff;
      .basket-count{
          margin:0 10px;
      }
  }
`;

function Nav() {
  return (
    <NavStyled>
      <div className="option">
        <span className="line-one">Hello</span>
        <span className="line-two">Sign In</span>
      </div>
      <div className="option">
        <span className="line-one">Returns</span>
        <span className="line-two">& Orders</span>
      </div>
      <div className="option">
        <span className="line-one">Your</span>
        <span className="line-two">Prime</span>
      </div>
      <div className="basket">
        <ShoppingBasketIcon />
        <span className="line-two basket-count">0</span>
      </div>
    </NavStyled>
  );
}

export default Nav;
