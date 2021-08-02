import React from 'react'
import { BsPencilSquare, BsHeart} from 'react-icons/bs'
import { MdDone} from 'react-icons/md'
function Coment() {
    return (
        <div className="flex-view mb-1 bg-white p-3">
                <div className="">

                <img src="https://reqres.in/img/faces/7-image.jpg" alt="" className="rounded-circle w-75" />
                </div>
                <div className="comment text-start ps-5">
                    <h6 className="text-bolder">James Anderson</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting</p>
                    <div className="foot">
                        <p>April 14, 2016 </p>
                        <button type="button" class="btn waves-effect waves-light btn-rounded btn-xs btn-info">Pennding</button>
                        <span className="hover">
                            <BsPencilSquare/>
                            <MdDone/>
                            <BsHeart/>
                        </span>
                    </div>
                </div>
        </div>
    )
}

export default Coment
