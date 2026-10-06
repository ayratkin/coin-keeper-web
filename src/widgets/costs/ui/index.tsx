"use client";

import { Fragment } from "react";
import { Card, CardContent, Divider, List, Typography } from "@mui/material";
import { CategoryIcon, getCategoryById } from "@/entities/category";
import { Cost, useCosts } from "@/entities/cost";

const RECENT_LIMIT = 6;

const Costs = () => {
  const { costs } = useCosts();
  const recent = [...costs]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, RECENT_LIMIT);

  return (
    <Card component="section" aria-labelledby="costs-title">
      <CardContent>
        <Typography id="costs-title" variant="h6" component="h2">
          Последние траты
        </Typography>
        {recent.length === 0 ? (
          <Typography color="text.secondary" sx={{ py: 3 }}>
            Пока нет трат
          </Typography>
        ) : (
          <List disablePadding>
            {recent.map((cost, index) => {
              const category = getCategoryById(cost.cost_category_id);
              return (
                <Fragment key={cost.cost_id}>
                  {index > 0 && <Divider component="li" variant="inset" />}
                  <Cost
                    cost={cost}
                    categoryName={category?.name}
                    avatar={category && <CategoryIcon category={category} />}
                  />
                </Fragment>
              );
            })}
          </List>
        )}
      </CardContent>
    </Card>
  );
};

export default Costs;
