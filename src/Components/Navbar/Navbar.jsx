import React from "react";
import {FiMail} from 'react-icons/fi'
import {GrDocumentNotes} from 'react-icons/gr'
import { BsGear} from 'react-icons/bs'
import { BsReverseLayoutSidebarReverse} from 'react-icons/bs';
import './Navbar.scss'
function Navbar() {
  return (
    <nav className="ms-auto w-25 me-4">
      <ul className="d-flex justify-content-between align-items-center  h-100 ">
        <li >
        <FiMail/>
        </li>
        <li><GrDocumentNotes/></li>
        <li><BsReverseLayoutSidebarReverse/></li>
        <li><BsGear/></li>
      </ul>
    </nav>
  );
}

export default Navbar;
