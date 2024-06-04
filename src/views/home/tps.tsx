"use client";

import styles from "./home.module.css";
import { useTps } from "@/hooks/use-tps";
import { useState } from "react";

const TPS = () => {
  const [latency] = useState(0);
  const { data, isLoading, error } = useTps();

  // todo can we add a skeleton?
  if (!data && isLoading) return <div>isLoading</div>;
  if (error) return <div>Error: Failed to fetch the TPS</div>;

  return (
    <div className={styles.counterContainer}>
      <div className={styles.counter}>
        <h1>{data?.payload || 0}</h1>
        <p>Live TPS</p>
      </div>
      <div className={styles.counter}>
        <h1>{latency}</h1>
        <p>Latency (s)</p>
      </div>
    </div>
  );
};

export default TPS;
