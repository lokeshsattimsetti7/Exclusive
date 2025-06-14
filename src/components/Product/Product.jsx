import React, { useState } from "react";
import styles from "./Product.module.css";
import { Link, useNavigate } from "react-router-dom";

import { ProductData } from "../../Data/ProductData";

import { ProductDetails } from "../../Data/ProductData";

const Product = () => {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  const handleBuyNow = () => {
    navigate("/cart", { state: { quantity: count } });
  };

  return (
    <div className={styles.MainSection}>
      {/* Breadcrumb */}
      <div className={styles.SectionOne}>
        <li>
          <Link to="/Account">MyAccount</Link>
        </li>
        <span>/</span>
        <li>
          <Link to="/">Gaming</Link>
        </li>
        <span>/</span>
        <li>
          <Link to="/About">Havic HV G-92 Gamepad</Link>
        </li>
        <span>/</span>
        <li>
          <Link to="/Error">404 Error</Link>
        </li>
      </div>

      {/* Product Details */}
      {ProductDetails.map((item, index) => (
        <div className={styles.SectionTwo} key={index}>
          <div className={styles.LeftSide}>
            <div className={styles.FirstColumn}>
              <img src={item.two} alt="preview 1" />
              <img src={item.three} alt="preview 2" />
              <img src={item.four} alt="preview 3" />
              <img src={item.Five} alt="preview 4" />
            </div>
            <div className={styles.SecondColumn}>
              <img src={item.one} alt="main product" />
            </div>
          </div>

          <div className={styles.RightSide}>
            <h1>Havic HV G-92 Gamepad</h1>
            <div className={styles.stars}>
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <p>(150 Reviews)</p>
              <p style={{ marginLeft: "1px" }}>In Stock</p>
            </div>

            <h2>$550.00</h2>
            <p>
              PlayStation 5 Controller Skin High quality vinyl with air <br />
              channel adhesive for easy bubble free install & mess <br />
              free removal Pressure sensitive.
            </p>
            <hr />

            <p>Colours:</p>
            <h3>Size:</h3>
            <div className={styles.Size}>
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <div key={size} className={styles.block}>
                  <p>{size}</p>
                </div>
              ))}
            </div>

            <div className={styles.buy}>
              <div className={styles.counter}>
                <button className={styles.decrement} onClick={decrement}>
                  -
                </button>
                <span className={styles.count}>{count}</span>
                <button className={styles.increment} onClick={increment}>
                  +
                </button>
              </div>
              <div className={styles.BuyButton}>
                <button onClick={handleBuyNow}>Buy Now</button>
              </div>
              <img src={item.heart} alt="wishlist" />
            </div>

            <div className={styles.services}>
              <div className={styles.serviceBox}>
                <img src={item.Free} alt="Free Delivery" />
                <div className={styles.textContent}>
                  <h1>Free Delivery</h1>
                  <p>Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <div className={styles.serviceBox}>
                <img src={item.Free} alt="Free Delivery" />
                <div className={styles.textContent}>
                  <h1>Return Delivery</h1>
                  <p>Free 30 Days Delivery Returns. Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.SectionThree}>
        <div className={styles.Upward}>
          <div className={styles.OrangeBlock}>
            <p>Related item</p>
          </div>
        </div>
        <div className={styles.ProductSection}>
          {ProductData.map((item, index) => (
            <div key={index} className={styles.Product}>
              <img
                src={item.img}
                alt={item.title}
                className={styles.ProductImage}
              />
              <div className={styles.ExtraItems}>
                <img src={item.per} alt="discount" />
              </div>
              <div className={styles.Eye}>
                <img src={item.Eye} alt="eye" />
              </div>
              <div className={styles.Heart}>
                <img src={item.Heart} alt="wishlist" />
              </div>
              <h1>{item.title}</h1>
              <p>
                {item.price} <span className={styles.SideTxt}>{item.old}</span>
              </p>
              <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <span className={styles.SideTxt}> {item.reviews}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
