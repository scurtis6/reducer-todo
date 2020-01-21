import React, { useState, useReducer } from 'react';
import { todoReducer, initialState } from '../reducers/reducer';

const TodoForm = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [newTodoText, setNewTodoText] = useState('');
    console.log(state);
}

export default TodoForm;