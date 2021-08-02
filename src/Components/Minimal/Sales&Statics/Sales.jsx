import React from 'react'

function Sales({title,value,salesCount,date}) {
    return (
        <div className="col-sm-12 col-md-4 col-lg-4 d-flex align-items-center justify-content-evenly w-100 ">
         <div className="info">
         <h5> {title}</h5>
            <p className="dispaly-5">{value}</p>
            <p>{date}</p>
            <p>{salesCount}</p>
         </div>
         <div className="chart">
             hewllo
         </div>
        </div>
    )
}

export default Sales
