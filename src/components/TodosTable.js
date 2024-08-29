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
                    rowNumber={todo.rowNumber}
                    rowDescription={todo.rowDescription}
                    assignedTo={todo.assignedTo}/>
                ))}
                <tr>
                    <th scope='row'>5</th>
                    <td>Washing car</td>
                    <td>Doe</td>
                </tr>
                <tr>
                    <th scope='row'>6</th>
                    <td>Hair Cutting</td>
                    <td>Maria</td>
                </tr>
                <tr>
                    <th scope='row'>7</th>
                    <td>Submitting Bills</td>
                    <td>John</td>
                </tr>
            </tbody>
      </table>
    )
}

export default TodosTable