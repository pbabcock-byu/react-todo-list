import { TodoItem } from "./TodoItem"

export function TodoList( {todos, toggleTodo, deleteTodo}) {

    return (
        <ul className="list">
            {todos.length ===0 && "No items listed"}
            {todos.map(todo => {
                return (
                    // the {...todo} does the same as loading all the todos - see both lines below
                    <TodoItem {...todo}  key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                    //<TodoItem id={todo.id} completed={todo.completed} title={todo.title} key={todo.id} />

                )
            })}
        </ul>
    )
}