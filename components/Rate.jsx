import React, { useState } from "react";
import styles from "../styles/Rate.module.css";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const data = [
  { name: "Group A", value: 10, fill: "#FFBB28" },
  { name: "Group B", value: 100, fill: "#FF8042" },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Rate = ({ cases, total, title, sample, percent }) => {
  const [percentage, setPercentage] = useState(0.2);
  return (
    <div className={styles.wrapper}>
      <div className={styles.graph} style={{ padding: "15px" }}>
        <div style={{ width: 180, height: 180 }}>
          <CircularProgressbarWithChildren
            // value={(cases / total) * 100}
            value={percent}
            // text={`${100 * percent}%`}
            styles={buildStyles({
              textColor: "red",
              pathColor: "turquoise",
              trailColor: "gold",
              textSize: "19px",
            })}
            strokeWidth={3}
          >
            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div style={{ color: "black", fontSize: "30px" }}>
                {/* {((cases / total) * 100).toFixed(2)}% */}
                {percent} %
              </div>
              <div
                style={{ color: "green", fontSize: "80%", marginTop: "10px" }}
              >
                {" "}
                OF {sample}
              </div>
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default Rate;
