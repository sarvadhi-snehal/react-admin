import React, { useState } from "react";
import Avatar from "../../Avatar/Avatar";
import { FaPlus } from "react-icons/fa";
// You can specify which plugins you need
import { Tooltip, Toast, Popover } from "bootstrap";
function Todo() {
  const [forModal, setForModal] = useState(false);
  return (
    <div className="col-sm-12 col bg-white ">
      <div className="todo-head d-flex w-100 justify-content-between px-4">
        <h6>TO DO LIST</h6>

        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <FaPlus />
        </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog text-dark">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Add Task
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
           
                    <form >
                        <div className="form-group d-flex flex-column text-start p-3">
                            <label htmlFor="task">Task Name</label>
                            <input type="text" name="task" id="task" placeholder="Enter Task Name" />
                        </div>

                        <div className="form-group d-flex flex-column text-start p-3">
                            <label htmlFor="assignTo p-2">Assign To</label>
                            <select name="assignTo" className="form-select" id="assignTo">
                                <option value="sachin">Sachin</option>
                                <option value="sehwag">Sehwag</option>
                                <option value="pritam">Pritam</option>
                                <option value="alia">Alia</option>
                                <option value="varun">Varun</option>
                            </select>
                        </div>

        
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
                </form>

              </div>
            </div>
          </div>
      </div>

      <div className="todo-list vh-50 overflow-hidden" >
        <ul className="todos">
          <li className="todo">
            <div className="todo-container d-flex flex-column">
              <input type="checkbox" name="done" id="done" />
              <p>
                Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
                <span className="btn btn-danger border-1 m-0 p-0">today</span>
              </p>
              <div className="view d-flex w-75">
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
              </div>
            </div>
          </li>

          <li className="todo">
            <div className="todo-container d-flex">
              <input type="checkbox" name="done" id="done" />
              <p>
                Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
          </li>

          <li className="todo">
            <div className="todo-container d-flex">
              <input type="checkbox" name="done" id="done" />
              <p>
                Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
          </li>
          <li className="todo">
            <div className="todo-container d-flex">
              <input type="checkbox" name="done" id="done" />
              <p>
                Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
          </li>

          <li className="todo">
            <div className="todo-container d-flex">
              <input type="checkbox" name="done" id="done" />
              <p>
                Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
          </li>
          <li className="todo">
            <div className="todo-container d-flex">
              <input type="checkbox" name="done" id="done" />
              <p>
                Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
          </li>

          <li className="todo">
            <div className="todo-container d-flex">
              <input type="checkbox" name="done" id="done" />
              <p>
                Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
          </li>

          <li className="todo">
            <div className="todo-container d-flex">
              <input type="checkbox" name="done" id="done" />
              <p>
                Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
          </li>

          <li className="todo">
            <div className="todo-container d-flex">
              <input type="checkbox" name="done" id="done" />
              <p>
                Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
          </li>
          <li className="todo">
            <div className="todo-container d-flex">
              <input type="checkbox" name="done" id="done" />
              <p>
                Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
          </li>
          <li className="todo">
            <div className="todo-container d-flex">
              <input type="checkbox" name="done" id="done" />
              <p>
                Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Todo;
