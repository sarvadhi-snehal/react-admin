import React from 'react'
import {GrDocumentNotes} from 'react-icons/gr'
import { MdDone} from 'react-icons/md'
import { AiOutlineHeart} from 'react-icons/ai'
function Comments() {
    return (
        <div className="comments d-flex">
            <div className="avatar  overflow-hidden rounded-circle">
                <img alt="Image placeholder " className="img-fluid rounded-circle w-25" src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg"/>
            </div>
            <div>

            <h6>Lorem, ipsum</h6>
            <p className="text-wrap">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quae sint sequi eligendi quibusdam sed distinctio officia veritatis perferendis magni omnis nulla illum amet, tempora doloribus aperiam itaque! Ea, nobis?
            </p>
            <div className="foot w-100">

            <span className="date">{new Date().toLocaleDateString()}</span>
            <span className="btn btn-primary">Pending</span>
            <span><GrDocumentNotes/></span>
            <span><MdDone/></span>
            <span><AiOutlineHeart/></span>
            </div>
            </div>
        </div>
    )
}

export default Comments
