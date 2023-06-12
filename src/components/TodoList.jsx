import TodoItem from "@/components/TodoItem";

const TodoList = ({todosProps}) => {
  return (
    <ul>
          {todosProps.map((todo) => (
              <TodoItem itemProp={ todo } />
          ))}
    </ul>
  )
}

export default TodoList