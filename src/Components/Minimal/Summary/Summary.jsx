import React from 'react'
import Card from './Card';
function Summary() {
    return (
        <div className="row w-100">
            <Card type="orange" title="MYNEW CLIENTS"/>
            <Card type="primary" title="NEW PROJECTS"/>
            <Card type="info" title="NEW INVOICES"/>
            <Card type="success" title="All PROJECTS"/>
        </div>
    )
}

export default Summary
