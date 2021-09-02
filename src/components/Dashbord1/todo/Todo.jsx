import React from 'react'
import TodoHeader from './TodoHeader'
import Grid from '@material-ui/core/Grid'
import SmallCard from '../../UI/SmallCard'
import TodoList from './TodoList'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root:{
        height: '80vh',
    
    }
}))
const Todo = () => {
    const classes = useStyles()
    return (
        <SmallCard  className="classes.heigh">
            <div className={classes.root}>
            <TodoHeader/>
            <TodoList/>
            </div>
        </SmallCard>
    )
}

export default Todo
