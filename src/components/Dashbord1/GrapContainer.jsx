import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import BigCard from "../UI/BigCard";
import SmallCard from "../UI/SmallCard";
import Weather from "../Commen/Weather";
import YearlySale from "../Commen/Graph";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "1rem",
    justifyContent: "space-between",
    alignItems: "center",
  },
  secondCard: {
    marginTop: "1.5rem",
  },
}));
const GraphContainer = (props) => {
  const classes = useStyles();

  return (
    <div container className={classes.root} spacing={2}>
      <BigCard>
        <YearlySale />
      </BigCard>
      <SmallCard>
        <Weather />

        <Weather className={classes.secondCard} />
      </SmallCard>
    </div>
  );
};

export default GraphContainer;
