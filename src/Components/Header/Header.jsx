import React from 'react'
import {FaBars} from 'react-icons/fa'
function Header() {
    return (
        <header className="bg-orange flex-view p-4">
            <label htmlFor="navbar"><FaBars/></label>
        </header>
    )
}

export default Header
