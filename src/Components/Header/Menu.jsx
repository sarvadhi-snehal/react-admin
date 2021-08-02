import React from 'react'
import { BsPencilSquare, BsEnvelope, BsLayoutThreeColumns, BsGear} from 'react-icons/bs'

function Menu() {
    return (
        <ul className="w-25 flex-view justify-content-between ms-auto   mb-0">
                <li  >
                    <BsEnvelope/>
                </li>

                <li>
                    <BsPencilSquare/>
                </li>

                <li>
                    <BsLayoutThreeColumns/>
                </li>

                <li>
                    <BsGear />
                </li>
        </ul>
    )
}

export default Menu
