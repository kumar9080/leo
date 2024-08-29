import TodosItemRow from "./TodosItemRow"

function TodosTable(props){
    return(
        <table className='table table-hover'>
            <thead>
            <tr>
                <th scope='col'>#</th>
                <th scope='col'>Description</th>
                <th scope='col'>Assigned To</th>
            </tr>
            </thead>
            <tbody>

                {props.todos.map(todo =>(
                    <TodosItemRow 
                    key={todo.rowNumber}
                    rowNumber={todo.rowNumber}
                    rowDescription={todo.rowDescription}
                    assignedTo={todo.assignedTo}/>
                ))}
            </tbody>
      </table>
    )
}

export default TodosTable