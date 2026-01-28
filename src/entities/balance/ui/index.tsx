import React, { useEffect, useState } from "react";
import tinkoffLogo from "../../../assets/img/tinkoff.png";
import "./styles.css";
import type { TBalanceResponse } from "../model";
import { CircularProgress } from "@mui/material";

const Balance: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState<string>();

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3010/api/balance")
      .then((response) => {
        return response.json();
      })
      .then((data: TBalanceResponse) => {
        setBalance(data.balance);
      })
      .finally(() => {
        console.log(123);
        setLoading(false);
      });
  }, []);

  return (
    <div className="balance">
      <div className="current-balance">
        <button className="change-balance-icon-btn">
          <img src={tinkoffLogo} alt="Tinkoff" className="balance-icon" />
        </button>
        <div className="balance-count">
          <p className="balance-count-title">Баланс:</p>
          {loading ? (
            <CircularProgress size={20} />
          ) : (
            <p className="balance-count-number">{balance}</p>
          )}
        </div>
      </div>

      <button className="add-stonks">
        <div className="add-stonks-icon-container">
          <span className="plus">+</span>
          {/* <img src={plusButton} alt="Добавить" className="add-stonks-icon" /> */}
        </div>
        <p className="add-stonks-title">Доход</p>
      </button>
    </div>
  );
};

export default Balance;
