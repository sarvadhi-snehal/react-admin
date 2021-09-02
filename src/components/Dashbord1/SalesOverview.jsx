import * as React from "react";
import HalfCard from "../UI/HalfCard";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import { DataGrid } from "@material-ui/data-grid";

const useStyles = makeStyles((theme) => ({
  flex: {
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
  },
  table: {
    width: "100%",
    
    fontSize: "1rem",
  },
  btn:{
      padding: "0.3rem",
      border : "none",
      color : "white",
      fontSize: "0.7rem"
  }
}));



const rows = [
  { id: 1, Name: "Snow", status: "sale", date: "April 18, 2017" , price : "$24", variant: "success"},
  { id: 2, Name: "Lannister", status: "extended", date: "April 19, 2017" , price : "$1250", variant: "primary"},
  { id: 3, Name: "Lannister", status: "extended", date: "April 19, 2017" , price : "$1250", variant: "primary"},
  { id: 4, Name: "Stark", status: "tax", date: "April 20, 2017" , price : "-$24", variant: "danger"},
  { id: 5, Name: "Targaryen", status: "sale", date: "April 21, 2017" , price : "$24", variant: "success"},
  { id: 6, Name: "Melisandre", status: "sale", date: "April 22, 2017" , price : "-$14", variant: "success"},
  { id: 7, Name: "Clifford", status: "member", date: "April 23, 2017" , price : "$64", variant: "success"},
  { id: 8, Name: "Frances", status: "extended", date: "April 18, 2017" , price : "$1250", variant: "primary"},
 
];

const SalesOverview = () => {
  const classes = useStyles();
  return (
    <HalfCard>
      <Paper className={classes.flex} elevation={0}>
        <Typography component="div">
          <Box fontSize="h6.fontSize" m={1}>
            Salse Overview
          </Box>
          <Box fontSize="fontSize" m={1}>
            Check the monthly sales
          </Box>
        </Typography>
        <FormControl variant="outlined">
          <Select value="30">
            <MenuItem value={10}>January</MenuItem>
            <MenuItem value={20}>February</MenuItem>
            <MenuItem value={30}>March</MenuItem>
            <MenuItem value={60}>April</MenuItem>
          </Select>
        </FormControl>
      </Paper>
      <Paper className={classes.flex} elevation={0}>
        <Typography component="div">
          <Box fontSize="h6.fontSize" m={1}>
            March 2017
          </Box>
          <Box fontSize="fontSize" m={1}>
            Report for this month
          </Box>
        </Typography>
        <Typography variant="h4" color="success">
          $3,690
        </Typography>
      </Paper>
      <Paper className={classes.table}>
        <table className="table table-hover">
        <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Status</th>
      <th scope="col">Date</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    {rows.map(row => (
        <tr>
        <th scope="row">{row.id}</th>
        <td>{row.Name}</td>
        <td ><button className={`rounded-pill ${classes.btn} bg-${row.variant}`}>{row.status}</button></td>
        <td>{row.date}</td>
        <td className={`text-${row.variant}`}>{row.price}</td>
      </tr>
    ))}

  </tbody>
        </table>
      </Paper>
    </HalfCard>
  );
};

export default SalesOverview;
