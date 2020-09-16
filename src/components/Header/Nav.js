import React from "react";
import styled from "styled-components";

const NavStyled = styled.div`

`;

function Nav() {
  return (
    <NavStyled>
      <div className="option">
        <span>Hello</span>
        <span>Sign In</span>
      </div>
      <div className="option">
        <span>Returns</span>
        <span>& Orders</span>
      </div>
      <div className="option">
        <span>Your</span>
        <span>Prime</span>
      </div>
      <div className="option"></div>
    </NavStyled>
  );
}

export default Nav;
