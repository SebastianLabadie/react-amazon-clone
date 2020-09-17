import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import styled from "styled-components";
import BasketProduct from "../Checkout/BasketProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../Reducer";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const PaymentStyled = styled.div`
  background-color: #fff;

  .payment__container > h1 {
    text-align: center;
    padding: 10px;
    font-weight: 400;
    background-color: rgb(234, 237, 237);
    border-bottom: 1px solid lightgray;
  }

  .payment__container > h1 a {
    text-decoration: none;
  }

  .payment__section {
    display: flex;
    padding: 20px;
    margin: 0 20px;
    border-bottom: 1px solid lightgray;
  }

  .payment__title {
    flex: 0.2;
  }

  .payment__address,
  .payment__items,
  .payment__details {
    flex: 0.8;
  }

  .payment__details > form {
    max-width: 400px;
  }

  .payment__details > h3 {
    padding-bottom: 20px;
  }

  .payment__details > form > div > button {
   /*  background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    font-weight: bolder;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111; */
  }
`;

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  console.log(error);
  return (
    <PaymentStyled>
      <div className="payment__container">
        <h1>
          Checkout <Link to="/checkout">{basket?.length} items</Link>
        </h1>

        {/* Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/* Payment section - Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <BasketProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment section - Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe magic will go */}

            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
                {/* Errors */}
                {error ? <div>{error}</div> : null}
            </form>
          </div>
        </div>
      </div>
    </PaymentStyled>
  );
}

export default Payment;
