import React from 'react'
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import SummaryItem from './SummaryItem'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
    flexView: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  }));
const SummaryList = () => {
    const classes = useStyles();
    let data = [
        {
            title : "MYNEW CLIENT",
            numbers : 23,
            icon : DesktopWindowsIcon
        },  {
            title : "NEW PROJECT",
            numbers : 169,
            icon : NoteAddIcon
        },
        {
            title : "NEW INVOICES",
            numbers : 157,
            icon : FileCopyOutlinedIcon
        },
        {
            title : "ALL PROJECTS",
            numbers : 431,
            icon : LocalMallOutlinedIcon
        },

    ]
    return (
        <Grid container spacing={1} className={classes.flexView}>
            {
                data.map((item,index) =>(
                    <SummaryItem key={index} title={item.title} Icon={item.icon} number={item.numbers}/>
                ))
            }
        </Grid>
    )
}



export default SummaryList
