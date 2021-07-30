import React from 'react'
import {data} from './data'
function SalesTable() {
    return (
  

<table className="table table-hover">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">name</th>
        <th scope="col">Status</th>
        <th scope="col">Date</th>
        <th scope="col">Price</th>
        </tr>
    </thead>
    <tbody>
  {data.map(item => (

    <tr>
      <th scope="row">{item.id}</th>
      <td>{item.name}</td>
      <td>{item.status}</td>
      <td>{item.date}</td>
      <td>{item.price}</td>
    </tr>
    ))}
    </tbody>
</table>
 
            
    )
}

export default SalesTable
