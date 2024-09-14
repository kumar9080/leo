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
                    deleteTodoRow={props.deleteTodoRow} 
                    rowNumber={todo.rowNumber}
                    rowDescription={todo.rowDescription}
                    assignedTo={todo.assignedTo}
                    deleteRowItem={props.deleteRowItem}
                    />
                ))}
            </tbody>
      </table>
    )
}

export default TodosTable