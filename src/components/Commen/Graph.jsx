import React from "react";
import { Line } from "react-chartjs-2";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
      yAxisID: "y-axis-1",
    },
    {
      label: "# of No Votes",
      data: [1, 2, 1, 1, 2, 2],
      fill: false,
      backgroundColor: "rgb(54, 162, 235)",
      borderColor: "rgba(54, 162, 235, 0.2)",
      yAxisID: "y-axis-2",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        type: "linear",
        display: true,
        position: "left",
        id: "y-axis-1",
      },
      {
        type: "linear",
        display: true,
        position: "right",
        id: "y-axis-2",
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "0.5rem"
  },
}));

const MultiAxisLine = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Paper variant="outlined"  >
      <div className="header">
        <h1 className="title">yearly sale</h1>
      
      </div>
      <Line data={data} options={options} />
    </Paper>
    </div>
  );
};

export default MultiAxisLine;
