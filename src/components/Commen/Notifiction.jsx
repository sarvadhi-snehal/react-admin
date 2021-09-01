import React from 'react'
import Box from '@material-ui/core/Box';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CreateIcon from '@material-ui/icons/Create';
import SettingsIcon from '@material-ui/icons/Settings';
import LayersIcon from '@material-ui/icons/Layers';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme)=>({
    box:{
        minWidth: 200,
        display:"flex",
        alignItems: "center",
        justifyContent:"space-between"
    }
}))
const Notifiction = () => {
    const classes = useStyles();
    return (
        <Box ml="auto" className={classes.box}>
           <Button><MailOutlineIcon /></Button> 
           <Button> <CreateIcon /></Button> <MailOutlineIcon />
           <Button><LayersIcon /></Button>
           <Button><SettingsIcon /></Button>
            
            
            
        </Box>
    )
}

export default Notifiction
