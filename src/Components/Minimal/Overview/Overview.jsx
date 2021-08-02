import React from 'react'
import CommentContainer from '../../Coments/CommentContainer'
import Sales from '../../Sales/Sales'
function Overview() {
    return (
        <div className="row m-2">
            <CommentContainer />
            <Sales />
        </div>
    )
}

export default Overview
