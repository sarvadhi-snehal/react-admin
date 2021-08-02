import React from 'react'
import Sales from './Sales'
function SalesStatics() {
    return (
        <div className="col-sm-12 col-md-4 col-lg-4 d-flex flex-column justify-content-between align-items-center">
            <Sales title="SALES DIFFERENCE" value="$647" date="APRIL 2017" salesCount ="(150 Sales)" />
            <Sales title="VISIT STATASTICS" value="$347" date="APRIL 2017" salesCount ="(150 Sales)" />
        </div>
    )
}

export default SalesStatics
