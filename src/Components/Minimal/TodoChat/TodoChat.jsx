import React from 'react'
import Todo from './Todo'
import Messages from './Messages'
import Chat from './Chat'
function TodoChat() {
    return (
        <div className="row m-2">
            <Todo/>
            <Messages />
            <Chat />
        </div>
    )
}

export default TodoChat
