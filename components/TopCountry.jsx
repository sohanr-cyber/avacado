import React, { useEffect, useState } from "react";
import styles from "../styles/TopCountry.module.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const TopCountry = ({ data }) => {
  const [newArray, setNewArray] = useState([]);

  const topTen = () => {
    let total = [];
    data.forEach((item) => {
      total.push(item);
    });
    total.sort((a, b) => b.NewCases - a.NewCases);
    setNewArray(total.slice(2, 10));
    console.log(total);
  };

  useEffect(() => {
    topTen();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Top Countries with daily new cases</div>
      <div className={styles.graph}>
        <ResponsiveContainer width="98%" aspect={7 / 3}>
          <BarChart
            layout="vertical"
            width={500}
            height={350}
            data={newArray}
            barSize={7}
            barCategoryGap={10}
            barGap={5}
            margin={{ top: 15, right: 5, bottom: 5, left: 5 }}
          >
            {/* <CartesianGrid stroke="#f5f5f5" /> */}
            <XAxis type="number" />
            <YAxis
              dataKey="Country"
              type="category"
              scale=""
              padding={{ top: 20, bottom: 20 }}
              tickLine={false}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="NewCases" barSize={20} fill="#333" background />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TopCountry;
