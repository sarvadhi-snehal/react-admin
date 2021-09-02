import React from 'react'
import SummaryList from '../components/Dashbord1/SummaryList/SummaryList'
import CardsCotainer from '../components/Dashbord1/CardsCotainer'
import Grid from '@material-ui/core/Grid'
import RecentComments from '../components/Dashbord1/RecentComments'
import SalesOverview from '../components/Dashbord1/SalesOverview'
import GraphContainer from '../components/Dashbord1/GrapContainer'
import {makeStyles} from '@material-ui/core'
import Todo from '../components/Dashbord1/Todo/Todo';
import Message from '../components/Dashbord1/Messages/Message'
import Chat  from '../components/Dashbord1/Chat/Chat'
const useStyles = makeStyles(theme =>({
    dashboard :{
        marginTop : '1rem'
    }
}))
const Dashboard1 = () => {
    const classes = useStyles();
    return (
        <div>
            <SummaryList/>
            <CardsCotainer/>
            <Grid container spacing={2} className={classes.dashboard}>
                <RecentComments />
                <SalesOverview/> 
            </Grid>
            <GraphContainer />
            <Grid container spacing={2} className={classes.dashboard}>
                <Todo />
                <Message />
                <Chat />
            </Grid>
        </div>
    )
}

export default Dashboard1
