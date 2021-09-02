import React from 'react'
import Grid from '@material-ui/core/Grid'
const BIgCard = ({children}) => {
    return (
        <Grid item xs={12} sm={12} md={8} lg={8}  >
            {children}
        </Grid>
    )
}

export default BIgCard
