import TodoRowItem from "./TodoRowItem"

function ToDoTable(props: {todos: ToDoModel[] , deleteTodoRow:Function}){

    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Description</th>
                    <th scope="col">assignedTo</th>
                </tr>
            </thead>
            <tbody>
               {props.todos.map(todo =>(
                <TodoRowItem
                    key={todo.rowNumber}
                    rowNumber={todo.rowNumber} 
                    rowDescription={todo.rowDescription} 
                    assignedTo={todo.assignedTo}
                    deleteTodoRow={props.deleteTodoRow}
                />
               ))}
               
            </tbody>
        </table>
    )
}
export default ToDoTable