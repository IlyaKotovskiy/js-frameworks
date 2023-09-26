export function TodoItem({ id, title, completed, removeTodoItem, changeTodoItem }) {
    return(
        <div
            className='todo_item'
            onDoubleClick={() => removeTodoItem(id)}
            onClick={() => changeTodoItem(id)}
            style={{
                backgroundColor: completed ? 'green' : 'red'
            }}
        >
            <h1>{title}</h1>
        </div>
    )
}