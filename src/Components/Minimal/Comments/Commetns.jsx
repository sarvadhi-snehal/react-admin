import React from "react";
import Coment from "./Coment";
function Commetns() {
  return (
    <div className="card bg-transparent col-sm-12 col-md-12 col-lg-6 ">
      <h6 className="p-4 text-start bg-white m-0">Recent Comments</h6>

      <div
        style={{height:"45rem"}}
        className="overflow-auto"
      >
        <Coment />
        <Coment />
        <Coment />
        <Coment />
      </div>
    </div>
  );
}

export default Commetns;
