import React from 'react'
import { FaBars} from 'react-icons/fa';
import './Search.scss'
function Search() {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <FaBars className="text-light h-100 w-100"/>
            <form className="ms-2 ">
                <input type="text" 
                placeholder="Search and Enter"
                className="rounded-pill p-1 border-0 foc"
                ></input>
            </form>
        </div>
    )
}

export default Search
