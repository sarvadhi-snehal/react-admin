import React from 'react'
import Comments from './Comments'
function CommentContainer() {
    return (
        <>
            <div className="head col-sm-12 col-lg-6 col-md-6 col-lg-6 vh-100 overflow-scroll">
                <h6>Recent Comments</h6>
                <Comments />
                <Comments />
                <Comments />
                <Comments />
            
            </div>
            
        </>
    )
}

export default CommentContainer
