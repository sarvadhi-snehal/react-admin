import React from 'react'
import Saleshead from './Saleshead';
import SalesTable from './SalesTable';
function Sales() {
    return (
        <div className="col-sm-12 col-lg-6 col-md-6 col-lg-6 vh-100">
            <Saleshead/>
            <SalesTable/>
        </div>
    )
}

export default Sales
