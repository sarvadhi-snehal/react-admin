import React from 'react'
import Paper from '@material-ui/core/Paper'
import SmallCard from '../../UI/SmallCard'
import MessagesList from './MessagesList'
import {makeStyles} from '@material-ui/core'
const useStyles = makeStyles(theme =>({
    header :{
        display: 'flex',
        justifyContent: "space-between",
        padding: "1rem"

   },
}))

const Message = () => {
    const classes = useStyles()
    return (
        <SmallCard>
            <Paper elevation={0} className={classes.header}>
                <h6>YOU HAVE 5 NEW MESSAGES</h6>
            </Paper>
            <MessagesList /> 
        </SmallCard>
    )
}

export default Message
