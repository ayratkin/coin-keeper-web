"use client";

import { Cost } from "@/entities/cost";
import { MOCK_COSTS } from "../api";
import styles from "./styles.module.css";
import { useEffect, useRef, useState } from "react";

const Costs = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const socketRef = useRef<WebSocket | null>(null);

  const handleOpen = (e: Event) => {
    console.log(e);
  };

  useEffect(() => {}, []);

  return (
    <div className={styles.costsContent}>
      <h2>Затраты:</h2>
      <div className={styles.costs}>
        {MOCK_COSTS.map((cost) => (
          <Cost key={cost.cost_id} cost={cost} />
        ))}
      </div>
    </div>
  );
};

export default Costs;
