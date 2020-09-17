import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";
import { auth } from "../../firebase";

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

  .basket {
    display: flex;
    align-items: center;
    color: #fff;
    .basket-count {
      margin: 0 10px;
    }
  }
  a{
    text-decoration:none;
  }
`;

function Nav() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <NavStyled>
      <Link to={!user && "/login"}>
        <div onClick={handleAuthenticaton} className="option">
          <span className="line-one">
            Hello {!user ? "Guest" : user.email}
          </span>
          <span className="line-two">
            {user ? "Sign Out" : "Sign In"}
          </span>
        </div>
      </Link>
      <div className="option">
        <span className="line-one">Returns</span>
        <span className="line-two">& Orders</span>
      </div>
      <div className="option">
        <span className="line-one">Your</span>
        <span className="line-two">Prime</span>
      </div>
      <Link to="/checkout">
        <div className="basket">
          <ShoppingBasketIcon />
          <span className="line-two basket-count">{basket?.length}</span>
        </div>
      </Link>
    </NavStyled>
  );
}

export default Nav;
