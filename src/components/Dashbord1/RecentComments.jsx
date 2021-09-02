import React from "react";
import HalfCard from "../UI/HalfCard";
import ScroolList from "../UI/ScroolList";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import Paper from "@material-ui/core/Paper";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import Button from "@material-ui/core/Button";
// import Moment from 'react-moment';
const useStyles = makeStyles((theme) => ({
  list: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  paper :{
      '&:hover': {
          backgroundColor: "grey"
      },
      marginBottom: 3
  },
  button: {
    margin: theme.spacing(1),
    borderRadius: "5em"
  },
}));

function commetnItem(props) {
    const classes = useStyles();
  return (
    <Paper elevation={0}  className={classes.paper}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="name" secondary="description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem harum, nulla illo quae illum suscipit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem harum, nulla illo quae illum suscipit?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem harum, nulla illo quae illum suscipit? "  />
     
      </ListItem>
        <div className="actions">
        <p >2021/02/12</p>
        <Button variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>
        </div>
    </Paper>
  );
}

const RecentComments = () => {
  return (
    <HalfCard>
      <ScroolList>{commetnItem}</ScroolList>
    </HalfCard>
  );
};

export default RecentComments;

