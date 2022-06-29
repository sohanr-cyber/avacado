import React from "react";
import styles from "../styles/OverView.module.css";
import CountUp from "react-countup";
import { useRouter } from "next/router";

const OverView = ({ title, TotalCases, TotalDeaths, TotalRecovered }) => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      {/* {title && <div className={styles.title}>{router.query.slug}</div>} */}
      <div className={styles.title}>
        <div
          className={styles.flag}
          style={{ width: "50px", height: "30px", backgroundColor: "green" }}
        >
          <div
            className={styles.circle}
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "red",
              zIndex: "10",
            }}
          ></div>
        </div>
        <span>Bangladesh</span>
      </div>

      <div className={styles.flex}>
        {" "}
        <div className={`${styles.item} ${styles.confirmed}`}>
          <div className={styles.title}>total Confirmed</div>
          <div className={styles.number}>
            <CountUp duration={2} end="1969361" separator="," />
          </div>
        </div>
        <div className={`${styles.item} ${styles.recovered}`}>
          <div className={styles.title}>total Recovered</div>
          <div className={styles.number}>
            {" "}
            <CountUp duration={2} end="1907067" separator="," />
          </div>
        </div>
        <div className={`${styles.item} ${styles.deaths}`}>
          <div className={styles.title}>total Deaths</div>
          <div className={styles.number}>
            {" "}
            <CountUp duration={2} end="29145" separator="," />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
