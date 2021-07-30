import React from "react";
import Card from "./Card";
import { AiOutlineDesktop, AiOutlineShopping } from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";
import { GrDocument } from "react-icons/gr";
function Summary() {
  return (
    <div className="row flex-view flex-wrap  w-100 ">
  
   <Card
        logo={AiOutlineDesktop}
        value={120}
        title="MYNEW CLIENTS"
        variant="warning"
        now={60}
      />

      <Card
        logo={IoCreateOutline}
        value={120}
        title="NEW PROJECT"
        variant="primary"
        now={70}
      />

      <Card
        logo={GrDocument}
        value={120}
        title="NEW INVOICES"
        variant="info"
        now={55}
      />

      <Card
        logo={AiOutlineShopping}
        value={120}
        title="ALL PROJECTS"
        variant="success"
        now={75}
      />
      </div>
   
   
  );
}

export default Summary;
