import React, {useState} from 'react';

const Todo = props => {
    const [info, setInfo] = useState('')
    console.log(props)
    
    const handleChanges = (event) => {
        setInfo(event.target.value)
    }
      return (
          <div>
              <form onSubmit={event => {
                  event.preventDefault();
                  props.addTodo(info);
                  setInfo('')
              }}>
                <label>Add New ToDo: <input name="todo" placeholder='add new todo here' onChange={handleChanges} value={info} /> </label>
                <button>Add</button>
              </form>
          </div>
      )
  }

export default Todo;