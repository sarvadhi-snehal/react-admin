import React from "react";

function Messages() {
  return (
    <div className="col-sm-12 col d-flex align-items-center justify-content-center position-relative">
      <h6>Chat</h6>
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
    
      <div className="fixed-bottom  position-absolute">
          <input type="text" name="message" id="message" placeholder="Type your message here" />
          <input type="submit" value="send" />
      </div>
    </div>
  );
}

export default Messages;
