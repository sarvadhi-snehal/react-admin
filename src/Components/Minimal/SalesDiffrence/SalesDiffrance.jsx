import React from 'react'
import ChartContainer from './ChartContainer';
import SalesStatics from '../Sales&Statics/SalesStatics'
function SalesDiffrance() {
    return (
        <div className="row d-flex align-items-center justify-content-center w-100 pb-4  vh-80 px-2">
            <ChartContainer/>
            <SalesStatics />

        </div>
    )
}

export default SalesDiffrance
