import './style.global.css';
import { TodoList } from "./components/TodoList";
import { useState } from "react";
import { AddTodo } from "./components/AddTodo";

export function App() {
    const data = [
        {id: 1, title: 'Позавтракать', completed: true},
        {id: 2, title: 'Почистить огурцы', completed: false},
        {id: 3, title: 'Помыть кота', completed: true},
    ]

    const [todos, setTodos] = useState(data);

    function removeTodoItem(id) {
        const removedTasks = todos.filter(elem => elem.id !== id);

        setTodos(removedTasks)
    }
    function changeTodoItem(id){
        const changedItem = todos.map(elem => {
            if (elem.id === id) {
                elem.completed = !elem.completed
            }
            return elem
        });

        setTodos(changedItem)
    }
    function addTodoItem(title){
        const newTodo = {
            id: Date.now(),
            title,
            completed: false
        }

        setTodos([newTodo, ...todos])
    }

    return(
        <div>
            <AddTodo addTodoItem={addTodoItem} />
            <TodoList
                todos={todos}
                removeTodoItem={removeTodoItem}
                changeTodoItem={changeTodoItem}
            />
        </div>
    )
}