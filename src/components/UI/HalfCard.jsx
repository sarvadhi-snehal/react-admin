import React from 'react'
import Grid from '@material-ui/core/Grid'
import  {makeStyles} from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: '1rem'
    }
}))

const HalfCard = ({children}) => {
    const classes = useStyles()
    return (
        <Grid item sm={12} xs={12} md={6} lg={6} className={classes.root}>
            {children}
        </Grid>
    )
}

export default HalfCard



