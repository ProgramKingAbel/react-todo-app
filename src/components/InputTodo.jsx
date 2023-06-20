import React, { useState } from 'react';

const InputTodo = ({addTodoItem}) => {
  const [title, setTitle] = useState('');
  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title)
      setTitle('');
    } else {
      alert('Please add Item');
    }
   
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Add Todo'
        value={title}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  )
}

export default InputTodo