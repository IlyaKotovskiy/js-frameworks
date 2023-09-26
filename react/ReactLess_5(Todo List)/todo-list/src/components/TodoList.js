import { TodoItem } from "./TodoItem";

export function TodoList({ todos, removeTodoItem, changeTodoItem }) {
    return(
        <div>
            { todos.map(elem => <TodoItem
                key={elem.id}
                id={elem.id}
                title={elem.title}
                completed={elem.completed}
                removeTodoItem={removeTodoItem}
                changeTodoItem={changeTodoItem}
            />) }
        </div>
    )
}