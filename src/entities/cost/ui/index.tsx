import { Card } from "@mui/material";
import type { TCost } from "../model";
import "./styles.css";

type TProps = {
  cost: TCost;
};

const Cost = (props: TProps) => {
  const { cost } = props;

  return (
    <div>
      <div>{`${cost.name}: ${cost.count}`}</div>
    </div>
  );
};

export default Cost;
