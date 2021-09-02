import React from 'react'
import { FixedSizeList } from "react-window";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core"
import Paper from "@material-ui/core/Paper"
import autoResize from "react-virtualized-auto-sizer"
const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    header: {
        padding: "1rem"

    }
  }));
const ScroolList = ({children}) => {
    const classes = useStyles();
    return (
        <>
        <Paper elevation={0}>

        <Typography variant="h6" className={classes.header}>Recent Comments</Typography>
        </Paper>
        <div className={classes.root}>
          <FixedSizeList height={600}  itemSize={60} itemCount={6}>
            {children}
          </FixedSizeList>
        </div>
        </>
    )
}

export default ScroolList
