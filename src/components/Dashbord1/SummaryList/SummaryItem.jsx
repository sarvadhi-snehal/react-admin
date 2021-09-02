import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LinearProgress from '@material-ui/core/LinearProgress';
const useStyles = makeStyles((theme) => ({
  
  root: {
    display: "flex",
    flexDirection: "column",
  },
  content: {

    display: "flex",
    justifyContent: "space-between",
  
    width: '100%'
  },
 

  progress: {
    margin :'1rem',
  }
 
}));
const SummaryItem = ({ title, Icon, number }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid item xs={12} sm={12} md={6} lg={3}>
      <Card className={classes.root} variant="outlined">
  
          <CardContent className={classes.content}>
            <div>
              <Typography component="h5" variant="h5">
                <Icon>{Icon}</Icon>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {title}
              </Typography>
            </div>
            <div>
              <Typography variant="h3">{number}</Typography>
            </div>
          </CardContent>
        <LinearProgress className={classes.progress} variant="determinate" value={number} />
    
      </Card>
    </Grid>
  );
};

SummaryItem.propTypes = {};
export default SummaryItem;
