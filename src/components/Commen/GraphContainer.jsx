import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
const GraphContainer = ({title}) => {
    return (
        <div>
            <div className="graph-header">
                <Typography variant="h6">{title}</Typography>
                <Typography variant="h6">{title}</Typography>
            </div>
        </div>
    )
}

GraphContainer.propTypes = {

}

export default GraphContainer
