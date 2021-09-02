import React from 'react'
import {makeStyles} from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
const useStyles = makeStyles(theme => ({
    root :{
        display : 'flex',
        padding : '1rem',
        
    },
    todoContain :{
        padding : '1rem',
    }
}))
const TodoItem = ({todo}) => {
    const classes = useStyles()
    return (
        <Paper className={classes.root}>
            <input type="checkbox" />
            <div className={classes.todoContain}>
                <p>{todo.text}</p>
                <div className="assignTo">
                {todo.assignTo}
                </div>
            </div>
            <button className="bg-danger d-inline">{todo.status}</button>
        </Paper>
    )
}

export default TodoItem
