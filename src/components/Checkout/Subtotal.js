import React from 'react'
import styled from 'styled-components'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../Reducer';

const SubtotalStyled=styled.div`
display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 100px;
  padding: 20px;
  background-color: #f3f3f3;
  border: 1px solid #dddddd;
  border-radius: 3px;

  .subtotal__gift {
  display: flex;
  align-items: center;
}

.subtotal__gift > input {
  margin-right: 5px;
}

button {
  background: #f0c14b;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
}

`
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
    return (
        <SubtotalStyled>
            <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
        </SubtotalStyled>
    )
}

export default Subtotal