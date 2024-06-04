"use client";

import styles from "./home.module.css";

import TPS from "./tps";

const Home = () => {
  return (
    <div className={styles.app}>
      <div className={styles.title}>Let's #breaksui</div>
      <TPS />
    </div>
  );
};

export default Home;
