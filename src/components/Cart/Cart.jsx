import React, { useState } from "react";
import styles from "./Cart.module.css";
import { useNavigate, useLocation, Link } from "react-router-dom";
import one from "./Gamepad.png";

const QuantityBox = ({ quantity, setQuantity }) => {
  const changeQuantity = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <div className={styles.quantityBox}>
      <div className={styles.display}>{quantity}</div>
      <div className={styles.arrows}>
        <button onClick={() => changeQuantity(1)}>▲</button>
        <button onClick={() => changeQuantity(-1)}>▼</button>
      </div>
    </div>
  );
};

const Cart = () => {
  const location = useLocation();
  const passedQty = location.state?.quantity || 0;

  const [gamepadQty, setGamepadQty] = useState(passedQty);
  const navigate = useNavigate();

  const gamepadPrice = 550;

  const gamepadSubtotal = gamepadQty * gamepadPrice;
  const total = gamepadSubtotal;

  const handleProceedToCheckout = () => {
    navigate("/bill", {
      state: {
        gamepadQty,
        gamepadSubtotal,
        total,
      },
    });
  };

  return (
    <div className={styles.MainSection}>
      <div className={styles.SectionOne}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <span>/</span>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </div>

      <div className={styles.SectionTwo}>
        <div className={styles.Row}>
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>

        <div className={styles.Row}>
          <p>
            <img src={one} alt="Gamepad" /> H1 Gamepad
          </p>
          <p>${gamepadPrice}</p>
          <QuantityBox quantity={gamepadQty} setQuantity={setGamepadQty} />
          <p>${gamepadSubtotal}</p>
        </div>

        <div className={styles.LastSection}>
          <Link to="/">
            <button>Return To Shop</button>
          </Link>

          <button>Update Cart</button>
        </div>
      </div>

      <div className={styles.ThirdSection}>
        <div className={styles.LeftSide}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className={styles.couponForm}
          >
            <input
              type="text"
              placeholder="Enter your coupon"
              className={styles.couponInput}
            />
            <button type="submit" className={styles.couponButton}>
              Apply Coupon
            </button>
          </form>
        </div>
        <div className={styles.RightSide}>
          <div className={styles.Gap}>
            <h1>Cart total</h1>
            <p>
              Subtotal <span>${total}</span>
            </p>
            <hr />
            <p>
              Shipping <span>Free</span>
            </p>
            <hr />
            <p>
              Total: <span>${total}</span>
            </p>
            <hr />
            <button onClick={handleProceedToCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
