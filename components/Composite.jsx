import React, { useState } from "react";
import styles from "../styles/TopCountry.module.css";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
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

function Composite({ data }) {
  const [state, setState] = useState(["deaths", "recovered"]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Daily Recovered And Death Cases</div>
      <div className={styles.graph}>
        <ResponsiveContainer width="100%" aspect={7 / 3}>
          <BarChart
            width={650}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: 5,
              bottom: 5,
            }}
          >
            <XAxis dataKey="date" padding={{ left: 0, right: 0 }} />
            <YAxis orientation={"right"} axisLine={false} tickLine={false} />

            <Tooltip />

            {
              <>
                {state.includes("confirmed") && (
                  <Bar dataKey="new_cases" fill="purple" stackId="a" />
                )}

                {state.includes("deaths") && (
                  <Bar dataKey="new_deaths" fill="black" stackId="a" />
                )}

                {state.includes("recovered") && (
                  <Bar dataKey="new_deaths" fill="yellowgreen" stackId="a" />
                )}
              </>
            }
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className={styles.legends}>
        {/* <span
          className={styles.legend}
          onClick={() =>
            state.includes("confirmed")
              ? setState(state.filter((item) => item != "confirmed"))
              : setState([...state, "confirmed"])
          }
          style={{
            background: `${state.includes("confirmed") ? "lightgreen" : ""}`,
          }}
        >
          Confirmed
        </span> */}
        <span
          className={styles.legend}
          onClick={() =>
            state.includes("recovered")
              ? setState(state.filter((item) => item != "recovered"))
              : setState([...state, "recovered"])
          }
          style={{
            background: `${state.includes("recovered") ? "lightgreen" : ""}`,
          }}
        >
          Recovered
        </span>
        <span
          className={styles.legend}
          onClick={() =>
            state.includes("deaths")
              ? setState(state.filter((item) => item != "deaths"))
              : setState([...state, "deaths"])
          }
          style={{
            background: `${state.includes("deaths") ? "lightgreen" : ""}`,
          }}
        >
          Deths
        </span>
      </div>
    </div>
  );
}

export default Composite;
