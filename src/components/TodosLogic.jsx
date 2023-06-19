import React, {useState} from 'react';
import InputTodo from '@/components/InputTodo';
import TodoList from '@/components/TodoList';

const TodosLogic = () => {
    const [todos, setTodos] = useState(
        [
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
        ]);
    return (
        <div>
        <InputTodo />    
         <TodoList todosProps={ todos } setTodos={setTodos}/>
      </div>
  )
}

export default TodosLogic