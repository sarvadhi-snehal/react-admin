import React from 'react'
import SmallCard from '../../UI/SmallCard'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core'
import Divider from '@material-ui/core/Divider';
import InputBase from '@material-ui/core/InputBase'
const useStyles = makeStyles(theme => ({
    header:{
        padding: '1rem'
    },
    chat:{
        height: '60vh'
    },
    root:{
        display: 'flex',
        height: '83vh',
        flexDirection: 'column'
    },
    form:{
        display: 'flex',
        padding: '2rem',
        height: '100%',
        justifyContent: 'space-between',
    },
    input : {
        outline: 'none',
        border: 'none'
    }
    
}))
const Chat = () => {
    const classes = useStyles()
    return (
        <SmallCard>
            <div className={classes.root}>

              <Paper elevation={0} className={classes.header}>
                <h6>Chat</h6>
            </Paper>
            <Paper className={classes.chat}>

            </Paper>
            <Divider />
            <Paper>
                <form className={classes.form}>
              
                    <input type="text" name="message" placeholder="Type your message here"  className={classes.input}  />
                    <button>send</button>
                </form>
            </Paper>
            </div>
        </SmallCard>
    )
}

export default Chat
