import React from 'react';
import { flushSync } from 'react-dom';

const TodosLogic = () => {
    const todos = [
        {
            id: 1,
            title: 'Setup Development Environment',
            complete: true,
        },
        {
            id: 2,
            title: 'Develop Website and Add content',
            complete: false,
        },
        {
            id: 3,
            title: 'Deploy to live server',
            complete: false,
        },
    ]
  return (
      <ul>
          {todos.map((todo) => (
              <li>{ todo.title }</li>
          ))}
    </ul>
  )
}

export default TodosLogic