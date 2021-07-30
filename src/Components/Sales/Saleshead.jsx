import React from 'react'

function Saleshead() {
    return (
        <>
        <div className="sales-head">
        <h6>Sales Overview</h6>
        <p>Check the monthly sales</p>
    </div>
    <div className="select-month">
        <select name="month-picker">
            <option value="jan">January</option>
            <option value="feb">February</option>
            <option value="march">March</option>
            <option value="april">April</option>
        </select>
    </div>
    <div className="sales-subhead">
        <div className="date">
            <h5>{new Date().toLocaleTimeString}</h5>
            <p>Report for this month</p>
        </div>
        <h3 className="text-success">$3,690</h3>
    </div>
     
    </>
    )
}

export default Saleshead
