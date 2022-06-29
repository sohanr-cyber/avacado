import React from "react";
import styles from "../styles/TopCountry.module.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Brush,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page H",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page I",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page J",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page K",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page L",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page M",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page N",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page O",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page P",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page Q",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page R",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page S",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page T",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page U",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page V",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page Q",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page R",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

const ChartArea = ({ title, number, percent }) => {
  return (
    <div className={styles.wrapper} style={{ width: "100%" }}>
      <div className={styles.graphs} style={{ position: "relative" }}>
        <div className={styles.text}>
          <div className={styles.heading}>{title}</div>
          <p></p>
          {/* <div className={styles.number}>{number}</div> */}
          <div className={styles.percent}>
            <span>{percent}%</span> of total Cases
          </div>
        </div>
        <ResponsiveContainer width="100%" aspect={5 / 3}>
          <AreaChart
            width={230}
            height={200}
            data={data}
            margin={{ left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" tick={false} padding={{ left: 50 }} />
            <YAxis hide={true} />
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            {/* <Tooltip /> */}

            <Area
              type="monotone"
              dataKey="pv"
              stroke="lightblue"
              fillOpacity={1}
              fill="url(#colorUv)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartArea;
