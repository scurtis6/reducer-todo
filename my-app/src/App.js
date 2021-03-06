import React, { useReducer, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
import { todoReducer, initialState } from './reducers/reducer';


function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  const [currentTodo, setCurrentTodo] = useState("");

  console.log(state)

  const addTodo = todoTask => {
    const newTodo = {
      item: todoTask,
      completed: false,
      id: Date.now()
    };
    dispatch({type: "ADD_TODO", payload: newTodo})
  }

  const handleComplete = id => {
    dispatch({type:"COMPLETED_TODO", id: id})
  }

  const clearCompleted = () => {
    dispatch({type: "CLEAR_TODO"})
  }
  return (
    <div className="App">
      <h2>This is a Todo list!!!</h2>
      <Todo state={state} dispatch={dispatch} handleComplete={handleComplete} />
      <TodoForm state={state} dispatch={dispatch} addTodo={addTodo} />
      <button className='clr-btn' onClick={(e) => {
        e.preventDefault();
        clearCompleted();
      }}>Clear Completed</button>
    </div>
  );
}

export default App;
