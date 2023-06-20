import React, {useState} from 'react';
import InputTodo from '@/components/InputTodo';
import TodoList from '@/components/TodoList';
import { v4 as uuidv4 } from 'uuid';


const TodosLogic = () => {
    const [todos, setTodos] = useState(
        [
            {
                id: uuidv4(),
                title: 'Setup Development Environment',
                completed: true,
            },
            {
                id: uuidv4(),
                title: 'Develop Website and Add content',
                completed: false,
            },
            {
                id: uuidv4(),
                title: 'Deploy to live server',
                completed: false,
            },
        ]);
        const handleChange = (id) => {
            // console.log('clicked', id);
            setTodos((prevState) =>
            prevState.map((todo) => {
              if (todo.id === id) {
                return {
                  ...todo,
                  completed: !todo.completed,
                };
              }
              return todo;
            })
          );
    }
    
    const delTodo = (id) => {
        console.log('deleted', id);
        setTodos([
            ...todos.filter((todo) => {
                return todo.id !== id;
            })
        ])
    }

    const addTodoItem = (title) => {
        //update state with user input 
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false,
        }
        setTodos([...todos, newTodo]);
    }

    return (
        <div>
            <InputTodo addTodoItem={ addTodoItem } />    
         <TodoList todosProps={ todos } setTodos={setTodos} handleChange={handleChange} delTodo={delTodo}/>
      </div>
  )
}

export default TodosLogic