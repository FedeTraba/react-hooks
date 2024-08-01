import TodoList from './TodoList'
import TodoAdd from './TodoAdd'
import useTodos from '../hooks/useTodos';




const TodoApp = () => {    

    const {todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo} =  useTodos();

    return (
        <>
            <h1>TodoApp  {todosCount}, <small> pendientes: {pendingTodosCount}</small></h1>
            <hr />

            <div className='row'>

                <div className='col-7'>
                    {/* TodoList */}
                    <TodoList 
                        todos={todos} 
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                    {/* Fin de TodoList */}
                </div>

                <div className='col-5'>
                    <h4>Agregar Todo</h4>
                    <hr />
                    {/* TOdoAdd  onNewTodo(todo)*/}
                        <TodoAdd onNewTodo={handleNewTodo}/>
                    {/* Fin del TodoAdd */}
                </div>

            </div>

        </>
    )
}

export default TodoApp
