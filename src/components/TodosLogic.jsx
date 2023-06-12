import React from 'react';
import InputTodo from '@/components/InputTodo';

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
        <div>
        <InputTodo />    
            <TodoList todosProps={ todos } />
      </div>
  )
}

export default TodosLogic