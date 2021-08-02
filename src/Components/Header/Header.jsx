import React from 'react'
import {FaBars} from 'react-icons/fa';
import Menu from './Menu';
function Header() {
    return (
        <header className="bg-orange flex-view p-3">
            <div className="fixed-menu flex-view ">
            <label htmlFor="navbar" className="text-light"><FaBars/></label>
            <input type="text" name="search" id="search" className="ms-2" />
            </div>
            <Menu />
        </header>
    )
}

export default Header
