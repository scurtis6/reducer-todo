import React, { useReducer } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { todoReducer, initialState } from './reducers/reducer';


function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state);

  const handleComplete = (id) => {
    dispatch({type: "COMPLETED_TODO", payload: id})
  }
  return (
    <div className="App">
      <TodoList state={state} handleComplete={handleComplete}/>
      <TodoForm />
    </div>
  );
}

export default App;
