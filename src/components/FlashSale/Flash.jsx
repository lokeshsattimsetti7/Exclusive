import React, { useState, useEffect, useRef } from "react";
import styles from "./Flash.module.css";
import one from "./ProductOne.png";
import two from "./ProductTwo.png";
import three from "./ProductThree.png";
import four from "./ProductFour.png";
import five from "./ProductFive.png";
import PerOne from "./Percent25.png";
import PerTwo from "./Percent30.png";
import PerThree from "./Percent35.png";
import PerFour from "./Percent40.png";
import eye from "./Fill Eye.png";
import heart from "./Fill Heart.png";
import { Link } from "react-router-dom";

const products = [
  {
    img: one,
    per: PerOne,
    Eye: eye,
    Heart: heart,
    title: "HAVIT HV-G92 Gamepad",
    price: "$120",
    old: "$160",
    reviews: "(88)",
    id: "havit-hv-g92",
  },
  {
    img: two,
    per: PerTwo,
    Eye: eye,
    Heart: heart,
    title: "AK-900 Wired Keyboard",
    price: "$960",
    old: "$1160",
    reviews: "(75)",
  },
  {
    img: three,
    per: PerThree,
    Eye: eye,
    Heart: heart,
    title: "IPS LCD Gaming Monitor",
    price: "$370",
    old: "$400",
    reviews: "(99)",
  },
  {
    img: four,
    per: PerFour,
    Eye: eye,
    Heart: heart,
    title: "S-Series Comfort Chair",
    price: "$375",
    old: "$400",
    reviews: "(99)",
  },
  {
    img: five,
    per: PerOne,
    Eye: eye,
    Heart: heart,
    title: "S-Series Comfort Chair",
    price: "$375",
    old: "$400",
    reviews: "(99)",
  },
  {
    img: one,
    per: PerTwo,
    Eye: eye,
    Heart: heart,
    title: "HAVIT HV-G92 Gamepad",
    price: "$120",
    old: "$160",
    reviews: "(88)",
  },
  {
    img: two,
    per: PerThree,
    Eye: eye,
    Heart: heart,
    title: "AK-900 Wired Keyboard",
    price: "$960",
    old: "$1160",
    reviews: "(75)",
  },
  {
    img: three,
    per: PerFour,
    Eye: eye,
    Heart: heart,
    title: "IPS LCD Gaming Monitor",
    price: "$370",
    old: "$400",
    reviews: "(99)",
  },
  {
    img: four,
    per: PerOne,
    Eye: eye,
    Heart: heart,
    title: "S-Series Comfort Chair",
    price: "$375",
    old: "$400",
    reviews: "(99)",
  },
  {
    img: five,
    per: PerTwo,
    Eye: eye,
    Heart: heart,
    title: "S-Series Comfort Chair",
    price: "$375",
    old: "$400",
    reviews: "(99)",
  },
];

const FlashSaleTimer = () => {
  const initialTime = 3 * 24 * 60 * 60 + 23 * 60 + 22;
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const productScrollRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollLeft = () => {
    productScrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    productScrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const formatTime = () => {
    const days = String(Math.floor(timeLeft / (24 * 60 * 60))).padStart(2, "0");
    const hours = String(
      Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60))
    ).padStart(2, "0");
    const minutes = String(Math.floor((timeLeft % (60 * 60)) / 60)).padStart(
      2,
      "0"
    );
    const seconds = String(timeLeft % 60).padStart(2, "0");
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime();

  return (
    <div className={styles.MainSection}>
      <div className={styles.SectionOne}>
        <div className={styles.FirstRow}>
          <p>Today's</p>
        </div>

        <div className={styles.SecondRow}>
          <h1>Flash Sales</h1>
          <div className={styles.Timer}>
            <div className={styles["time-box"]}>
              <span className={styles.time}>{days}</span>
              <span className={styles.label}>Days</span>
            </div>
            <div className={styles["time-box"]}>
              <span className={styles.time}>{hours}</span>
              <span className={styles.label}>Hours</span>
            </div>
            <div className={styles["time-box"]}>
              <span className={styles.time}>{minutes}</span>
              <span className={styles.label}>Minutes</span>
            </div>
            <div className={styles["time-box"]}>
              <span className={styles.time}>{seconds}</span>
              <span className={styles.label}>Seconds</span>
            </div>
          </div>

          <div className={styles.DoubleArrow}>
            <div className={styles.ArrowGap}>
              <button onClick={scrollLeft}>
                <i className="fas fa-arrow-left"></i>
              </button>
            </div>
            <div className={styles.ArrowGap}>
              <button onClick={scrollRight}>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.SectionTwo}>
        <div className={styles.ProductSection} ref={productScrollRef}>
          {products.map((item, index) => (
            <Link
              key={index}
              to={`/product/${item.id}`}
              className={styles.Product}
            >
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
                <img src={item.Heart} alt="whishlist" />
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
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.ProductsButton}>
        <button>View All Products</button>
      </div>
    </div>
  );
};

export default FlashSaleTimer;
