import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",

    justifyContent: "space-between",
    flexDirection: "column",
    
  },
  height: {
    minHeight: "70vh",
    backgroundColor: "blue",
  },
}));
const SmallCard = ({ children, className }) => {
  const classes = useStyles();
  return (
    <Grid
      item
      className={classes.root}
      xs={12}
      sm={12}
      md={4}
      lg={4}
    >
      {children}
    </Grid>
  );
};

export default SmallCard;
