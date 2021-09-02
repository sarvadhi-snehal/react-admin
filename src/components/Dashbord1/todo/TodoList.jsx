import React from "react";
import TodoItem from "./TodoItem";
import { FixedSizeList } from "react-window";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles(theme => ({
    root: {
        maxHeight: 450,
        overflowY : 'auto'
    },

}))
const TodoList = () => {
    const classes = useStyles()
  const todos = [
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ?",
        status: "Approved",
        variant: "primary",
        assignTo: "user, user,user",
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ?",
        status: "Approved",
        variant: "primary",
        assignTo: "user, user,user",
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ?",
        status: "Approved",
        variant: "primary",
        assignTo: "user, user,user",
      },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ?",
      status: "Approved",
      variant: "primary",
      assignTo: "user, user,user",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ?",
      status: "Approved",
      variant: "primary",
      assignTo: "user, user,user",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ?",
      status: "Approved",
      variant: "primary",
      assignTo: "user, user,user",
    },
  ];
  return (
    <Paper className={classes.root}>
      
        {todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      
    </Paper>
  );
};

export default TodoList;
