import React from "react";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";
const BasketProductStyled = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;

  .basketProduct__info {
    padding-left: 20px;

    button {
      background: #f0c14b;
      border: 1px solid;
      margin-top: 10px;
      border-color: #a88734 #9c7e31 #846a29;
      color: #111;
    }
  }

  .basketProduct__img {
    object-fit: contain;
    width: 180px;
    height: 180px;
  }

  .basketProduct__rating {
    display: flex;
  }

  .basketProduct__title {
    font-size: 17px;
    font-weight: 800;
  }
`;
function BasketProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <BasketProductStyled>
      <img className="basketProduct__img" src={image} alt="product img" />
      <div className="basketProduct__info">
        <p className="basketProduct__title">{title}</p>
        <p className="basketProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="basketProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </BasketProductStyled>
  );
}

export default BasketProduct;
