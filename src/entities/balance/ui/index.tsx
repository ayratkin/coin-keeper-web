"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import type { TBalanceResponse } from "../model";
import { CircularProgress } from "@mui/material";

const Balance: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState<string>("500");

  useEffect(() => {
    fetch("http://localhost:3010/api/balance")
      .then((response) => {
        return response.json();
      })
      .then((data: TBalanceResponse) => {
        setBalance(data.balance);
      })
      .catch((e) => {
        console.log(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.balance}>
      <div className={styles.balanceCount}>
        <p className={styles.balanceCountTitle}>Баланс:</p>
        {loading ? (
          <CircularProgress size={20} />
        ) : (
          <p className={styles.balanceCountNumber}>{balance}</p>
        )}
      </div>
    </div>
  );
};

export default Balance;
