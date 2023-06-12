import React from 'react'

const TodoList = (props) => {
  return (
    <ul>
          {props.todoProps.map((todo) => (
              <li>{ todo.title }</li>
          ))}
    </ul>
  )
}

export default TodoList