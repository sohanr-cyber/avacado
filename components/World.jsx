import React, { useState } from "react";
import styles from "../styles/World.module.css";
import { useRouter } from "next/router";
import CountUp from "react-countup";

const World = ({ data }) => {
  const [nums, setNumbs] = useState("Have you ever worked on a");
  const [query, setQuery] = useState("");
  const router = useRouter();
  const sortData = data;

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.left}>
          <span>i</span> Hint : Click on a Country for more info
        </div>
        <div className={styles.right}>
          <input
            type="text"
            className={styles.field}
            placeholder="Search Country"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <tr>
            <th>Country</th>
            <th>Total Confirmed</th>
            <th>Total Recovered</th>
            <th>Total Deaths</th>
          </tr>
          {data
            .slice(2)
            .filter((item) => item.Country.toLowerCase().includes(query))
            .map((i, k) => (
              <tr key={k}>
                <td onClick={() => router.push(`/country/${i.Country}`)}>
                  {i.Country}{" "}
                </td>
                <td>
                  <CountUp duration={2} end={i.TotalCases} separator="," />{" "}
                </td>
                <td>
                  <CountUp duration={2} end={i.TotalRecovered} separator="," />
                </td>
                <td>
                  <CountUp duration={2} end={i.TotalDeaths} separator="," />
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};

export default World;
