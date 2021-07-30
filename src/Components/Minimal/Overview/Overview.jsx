import React from 'react'
import CommentContainer from '../../Coments/CommentContainer'
import Sales from '../../Sales/Sales'
function Overview() {
    return (
        <div className="row">
            <CommentContainer />
            <Sales />
        </div>
    )
}

export default Overview
