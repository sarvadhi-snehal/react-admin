import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import GraphContainer from './GraphContainer'
const CardsCotainer = props => {
    return (
        <Grid spacing={3}>
            <GraphContainer title="YEARLY SALES" />

            
        </Grid>
    )
}

CardsCotainer.propTypes = {

}

export default CardsCotainer
