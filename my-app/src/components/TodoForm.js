import React, { useState, useReducer } from 'react';
import { todoReducer, initialState } from '../reducers/reducer';

const TodoForm = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [newTodoText, setNewTodoText] = useState('');
    console.log(state);
    return(
        <div>
            <h1>{state.item}</h1>
        </div>
    )
}

export default TodoForm;