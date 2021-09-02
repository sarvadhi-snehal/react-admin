import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxHeight: 462,
    overflowY: 'auto',
    backgroundColor: theme.palette.background.paper,
  }
}));

export default function MessagesList() {
  const classes = useStyles();
  const listItems = [
    {
    name : 'Sonu Nigam',
    msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    time : '6:12 AM'
  },
  {
    name : 'Sonu Nigam',
    msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    time : '6:12 AM'
  },
  {
    name : 'Sonu Nigam',
    msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    time : '6:12 AM'
  },
  {
    name : 'Sonu Nigam',
    msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    time : '6:12 AM'
  },
  {
    name : 'Sonu Nigam',
    msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    time : '6:12 AM'
  },
  {
    name : 'Sonu Nigam',
    msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    time : '6:12 AM'
  },
  {
    name : 'Sonu Nigam',
    msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    time : '6:12 AM'
  },
  {
    name : 'Sonu Nigam',
    msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    time : '6:12 AM'
  },
]
  return (
    <Paper className={classes.root}>
     
     {listItems.map(list => (
        <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={list.name} secondary={list.msg} />
      </ListItem>
     ))}
      
    </Paper>
  );
}
