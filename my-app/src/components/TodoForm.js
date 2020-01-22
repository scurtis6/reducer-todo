import React, { useState, useReducer } from 'react';
import { todoReducer, initialState } from '../reducers/reducer';
import TodoList from './TodoList';

function TodoForm (props) {
    // const [state, dispatch] = useReducer(todoReducer, initialState);
    // const [newTodoText, setNewTodoText] = useState('');
    console.log(props);
   
    return(
        <div className="todo-form">
            {/* <h1>{state.item}</h1> */}
            <form>
                <label htmlFor='todo'>Add New Todo:</label>
                <input 
                id='todo'
                name='todo'
                type='text'
                placeholder='Add ToDo'
                 />
                 {/* <button>Add</button>
                 <button>Edit</button>
                 <button>Delete</button> */}
            </form>
        </div>
    )
}

export default TodoForm;