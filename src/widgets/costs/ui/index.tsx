import { Cost } from "../../../entities/cost";
import { MOCK_COSTS } from "../api";
import styles from "./styles.module.css";
import { useEffect, useRef, useState } from "react";

const Costs = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const socketRef = useRef<WebSocket | null>(null);

  const handleOpen = (e) => {
    console.log(e);
  };
  const handleGetMessage = (e) => {
    const parsedToJsonResponse = JSON.parse(e.data);
    const data = parsedToJsonResponse?.payload?.message;

    if (parsedToJsonResponse.type === "error") {
      alert(data);
      setIsLoading(false);
      return;
    }

    if (data) {
      setMessages((prev) => [...prev, data]);
      setIsLoading(false);
    }
  };

  const handleSendMessage = () => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      const request = {
        type: "echo.error",
        payload: { code: "bad_message", message: "Привки" },
        id: 1,
        ts: 200,
      };
      setIsLoading(true);
      socketRef.current.send(JSON.stringify(request));
    }
  };

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:4000/ws/echo");
    socket.onopen = handleOpen;
    socket.onmessage = handleGetMessage;
    socketRef.current = socket;

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className={styles.costsContent}>
      <h2>Затраты:</h2>
      <div className={styles.costs}>
        {MOCK_COSTS.map((cost) => (
          <Cost key={cost.cost_id} cost={cost} />
        ))}
      </div>
      <button onClick={handleSendMessage} disabled={isLoading}>
        Отправить
      </button>
      {isLoading && <div>Загрузка...</div>}
      {messages.map((m, i) => (
        <div key={i}>{m}</div>
      ))}
    </div>
  );
};

export default Costs;
