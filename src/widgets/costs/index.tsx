import Cost from "../../entities/cost/ui";
import { MOCK_COSTS } from "./api";
import styles from "./styles.module.css";

const Costs = () => {
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
