import React, {useState, useEffect} from 'react';
import InputTodo from '@/components/InputTodo';
import TodoList from '@/components/TodoList';
import { v4 as uuidv4 } from 'uuid';


const TodosLogic = () => {
    const [todos, setTodos] = useState(getInitialTodos());
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

    const setUpdate = (updatedTitle, id) => {
        //update state 
        setTodos(
            todos.map((todo) => {
              if (todo.id === id) {
                todo.title = updatedTitle;
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

    useEffect(() => {
        //store todos
        const temp = JSON.stringify(todos);
        localStorage.setItem('todos', temp);
    }, [todos]);

    function getInitialTodos() {
        const temp = localStorage.getItem('todos');
        const savedTodos = JSON.parse(temp);
        return savedTodos || [];
    }

    return (
        <div>
            <InputTodo addTodoItem={ addTodoItem } />    
            <TodoList todosProps={todos} setTodos={setTodos} handleChange={handleChange} delTodo={delTodo} setUpdate={ setUpdate } />
      </div>
  )
}

export default TodosLogic