import React from 'react'
import Commetns from '../Comments/Commetns'
import SalesOverview  from '../SalesOverview/SalesOverview'
function CommetnSection() {
    return (
        <div className="row m-1 w-100">
            <Commetns/>
            <SalesOverview/>
        </div>
    )
}

export default CommetnSection
