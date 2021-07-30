import React from "react";
import Comments from "../../Coments/Comments";
function Messages() {
  return (
    <div className="col-sm-12 col-md-12 col-lg-4 overflow-hidden">
            <div className="todo-head">
                <h6>TO DO LIST</h6>
                <button className="btn btn-sucssess bg-success">ADD</button>

            </div>
             <div className="todo-list vh-50 overflow-scroll">
                <ul className="todos ">
                <Comments/>
                <Comments/>
              

                </ul>
            </div>
        </div>
    );
}

export default Messages;
