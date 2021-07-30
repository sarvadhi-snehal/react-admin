import React from 'react'

function Todo() {
    return (
        <div className="col-sm-12 col-md-12 col-lg-4 ">
            <div className="todo-head">
                <h6>TO DO LIST</h6>
                <button className="btn btn-sucssess bg-success">ADD</button>

            </div>
            <div className="todo-list vh-50 overflow-scroll">
                <ul className="todos">
                    <li className="todo">
                        <div className="todo-container d-flex">
                            <input type="checkbox" name="done" id="done" />
                            <p>Lorem, ipsum dolor
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </li>
                    

                    <li className="todo">
                        <div className="todo-container d-flex">
                            <input type="checkbox" name="done" id="done" />
                            <p>Lorem, ipsum dolor
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </li>

                    <li className="todo">
                        <div className="todo-container d-flex">
                            <input type="checkbox" name="done" id="done" />
                            <p>Lorem, ipsum dolor
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </li>

                    <li className="todo">
                        <div className="todo-container d-flex">
                            <input type="checkbox" name="done" id="done" />
                            <p>Lorem, ipsum dolor
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </li>

                    <li className="todo">
                        <div className="todo-container d-flex">
                            <input type="checkbox" name="done" id="done" />
                            <p>Lorem, ipsum dolor
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </li>
                    <li className="todo">
                        <div className="todo-container d-flex">
                            <input type="checkbox" name="done" id="done" />
                            <p>Lorem, ipsum dolor
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </li>
                    <li className="todo">
                        <div className="todo-container d-flex">
                            <input type="checkbox" name="done" id="done" />
                            <p>Lorem, ipsum dolor
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Todo
