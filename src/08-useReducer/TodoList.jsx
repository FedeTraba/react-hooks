import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos = [], onDeleteTodo, onToggleTodo}) => {
  return (
    <ul className='list-group'>
        {
            todos.map(todo => (
                // TodoItem... 
                <TodoItem 
                  key={todo.id} 
                  todo={todo} 
                  onDeleteTodo={ id => onDeleteTodo(id)}
                  onToggleTodo={onToggleTodo}
                />
            ))
        }
    </ul>
  )
}

export default TodoList
