import React from 'react';

function Todo (props) {
    console.log(props);
    return (
        <div className={`todo${props.item.completed ? ' completed' : ''}`} onClick={() => props.handleComplete(props.item.id)} >
            <p>{props.item.todo}</p>
        </div>
    )
}

export default Todo;