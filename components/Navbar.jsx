import React from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo} onClick={() => router.push("/")}>
        <span>
          <Image
            src="/assets/coronavirus.png"
            width="45px"
            height="45px"
            alt=""
          />
        </span>
        Covid <span style={{ color: "green" }}>BD</span>
        <span>Tracker</span>
      </div>
    </div>
  );
};

export default Navbar;
