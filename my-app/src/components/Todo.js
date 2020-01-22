import React from 'react';

const Todo = props => {
    console.log(props)

    // const handleComplete = id => {
    //   dispatch({type:"COMPLETED_TODO", id: id})
    // }

  return (
    <div className='todo'>
        {props.state.map(todo =>{
            return <p  className={`todo_list ${todo.completed ? 'completed' : ''}`}
            key={todo.id} id={todo.id} onClick={() => props.handleComplete(todo.id)}>{todo.item}</p>
        })}
    </div>
  );
};

export default Todo; 