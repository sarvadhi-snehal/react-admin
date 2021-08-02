import React from "react";

import { FaPlus} from 'react-icons/fa'
import Breadcrumb from './Breadcrumb'
function Subheader({ title }) {
  return (
    <div className="flex-view p-3 bg-white mb-3">   
      

    <h5 className="d-inline text-start">{title}</h5>

    <div className="end ms-auto flex-view ">
    <Breadcrumb title={title} />

<button type="button" className="btn waves-effect waves-light btn-info d-inline text-center "><FaPlus className="rounded-circle p-1 text-info bg-light m-2 " />Create New</button>
    </div>
</div>
   
  );
}

export default Subheader;
Subheader.defaultProps = {
    title: "Dashbord 1",
  };
