import React from 'react'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'
import './Header.scss';
function Header() {
    return (
        <header className="d-flex w-100 p-2">
            <Search/>
            <Navbar/>
        </header>
    )
}

export default Header
