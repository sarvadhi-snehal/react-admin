import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root:{
        height:'100%',
        padding: '1rem',
        backgroundColor : '#4DC0C8'
    }

});

export default function OutlinedCard({className}) {
  const classes = useStyles();


  return (
    <div  variant="outlined" className={`${className} ${classes.root}`}>
     <Box>
         <Typography variant="h3">73</Typography>
         <Typography variant="caption" >Ahmedabad,india</Typography>
     </Box>
     <Box>
         <Typography variant="h3">73</Typography>
         <Typography variant="caption" >Ahmedabad,india</Typography>
     </Box>
    </div>
  );
}
