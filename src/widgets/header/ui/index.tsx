import Balance from "../../../entities/balance/ui";
import PlaneBalance from "../../../entities/planeBalance/ui";
import SpendingBalance from "../../../entities/spendingBalance/ui";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Balance />
      <SpendingBalance />
      <PlaneBalance />
    </div>
  );
};
