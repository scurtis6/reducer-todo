import React from 'react';
import Todo from './Todo';

function TodoList (props) {
    console.log('this is props', props);
    return (
        <div>
            {props.state.map((item) => {
                return <Todo key ={item.id} item={item} handleComplete={props.handleComplete} /> 
            })}
        </div>
    )
}

export default TodoList;