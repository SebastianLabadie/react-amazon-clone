import React from "react";
import styled from "styled-components";
const ProductStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 10px;
  padding: 20px;
  width: 100%;
  max-height: 400px;
  min-width: 100px;
  background-color: #fff;
  z-index: 99;

  .product__rating {
    display: flex;
  }

  .product__img {
    max-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
  }

  .product__btn {
    background: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
  }

  .product__price {
    margin-top: 5px;
  }

  .product__info {
    height: 100px;
    margin-bottom: 15px;
  }
`;
function Product({ title, image, price, rating }) {
  return (
    <ProductStyled>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((star) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img className="product__img" src={image} alt="homeimg" />

      <button className="product__btn">Add to basket</button>
    </ProductStyled>
  );
}

export default Product;
