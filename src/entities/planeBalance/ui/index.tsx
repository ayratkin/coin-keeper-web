import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import type { TBalanceResponse } from "../model";
import { Card, CircularProgress } from "@mui/material";

const Balance: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState<string>("500");

  return (
    <div className={styles.balance}>
      <div className={styles.balanceCount}>
        <p className={styles.balanceCountTitle}>В планах:</p>
        {loading ? (
          <CircularProgress size={20} />
        ) : (
          <p className={styles.balanceCountNumber}>1000р</p>
        )}
      </div>
    </div>
  );
};

export default Balance;
