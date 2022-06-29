import React, { useState } from "react";
import styles from "../styles/TopCountry.module.css";

import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const data = [
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

const MixedChart = ({ data }) => {
  const [state, setState] = useState(["line", "bar", "area"]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Daily Confirmed Casses</div>
      <div className={styles.graph}>
        <div className={styles.selections}>
          <div
            className={styles.item}
            onClick={() =>
              state.includes("line")
                ? setState(state.filter((item) => item != "line"))
                : setState([...state, "line"])
            }
            style={{
              background: `${
                state.includes("line") ? "rgba(7, 234, 7, 0.5)" : ""
              }`,
            }}
          >
            Line
          </div>
          <div
            className={styles.item}
            onClick={() =>
              state.includes("bar")
                ? setState(state.filter((item) => item != "bar"))
                : setState([...state, "bar"])
            }
            style={{
              background: `${
                state.includes("bar") ? "rgba(7, 234, 7, 0.5)" : ""
              }`,
            }}
          >
            Bar
          </div>
          <div
            className={styles.item}
            onClick={() =>
              state.includes("area")
                ? setState(state.filter((item) => item != "area"))
                : setState([...state, "area"])
            }
            style={{
              background: `${
                state.includes("area") ? "rgba(7, 234, 7, 0.5)" : ""
              }`,
            }}
          >
            Area
          </div>
        </div>
        <ResponsiveContainer width="100%" aspect={7 / 3}>
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="purple" stopOpacity={0.8} />
              <stop offset="95%" stopColor="purple" stopOpacity={0} />
            </linearGradient>
            <XAxis dataKey="date" padding={{ left: 0, right: 0 }} />
            <YAxis orientation={"right"} axisLine={false} tickLine={false} />

            {/* <Tooltip /> */}
            {/* <Legend /> */}
            {
              <>
                {state.includes("area") && (
                  <Area
                    type="monotone"
                    dataKey="new_cases"
                    fill="url(#colorUv)"
                    stroke="#8884d8"
                  />
                )}

                {state.includes("bar") && (
                  <Bar dataKey="new_cases" barSize={20} fill="purple" />
                )}
                {state.includes("line") && (
                  <Line type="monotone" dataKey="new_cases" stroke="purple" />
                )}
              </>
            }
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MixedChart;
