import React from 'react'

function SalesOverview() {
    return (
        <div className=" col-sm-12 col-md-12 col-lg-6">
                <div className="head  p-4 text-start flex-view justify-content-between bg-white" >
                    <div className="">
                    <h6>Sales Overview</h6>
                    <p>Check the monthly sales</p>
                    </div>
                    <div className="">
                        <select name="month" id="month">
                            <option value="jan">Janyuary</option>
                            <option value="march">February</option>
                            <option value="march" selected>March</option>
                            <option value="march">April</option>
                        </select>
                    </div>
                </div>

                <div className="flex-view text-start p-4 bg-transparent justify-content-between">
                <div className="">
                    <p className="">March 2017</p>
                    <p>Report for this month</p>
                    </div>
                    <div className="">
                       <p className="display-6 text-success">$3,690</p>
                    </div>
                </div>
        </div>
    )
}

export default SalesOverview
