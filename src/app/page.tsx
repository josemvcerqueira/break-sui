"use client";

import styles from "./page.module.css";
import { useTps } from "@/hooks/use-tps";

const Home = () => {
  const tps = useTps();

  return (
    <div className={styles.app}>
      <div className={styles.title}>Let's #breaksui</div>
      <div className={styles.counterContainer}>
        <div className={styles.counter}>
          <h1>10</h1>

          <p>Live TPS</p>
        </div>
        <div className={styles.counter}>
          <h1>=100</h1>
          <p>Latency (s)</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
