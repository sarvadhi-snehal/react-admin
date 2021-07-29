import React from 'react'

function Card(props) {
    return (
        <div className="col-sm-12 col-md-3 col-md-3
        d-flex align-items-center justify-content-center flex-column 
        ">
            <div className="d-flex align-items-center justify-content-between w-100  ">
            <p>{props.title}</p>
            <p className="display-6">
                {props.value}
            </p>

            </div>
            <div className="progress">

            </div>
           
        </div>
    )
}

export default Card
