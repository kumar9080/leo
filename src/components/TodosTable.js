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
                    <th scope='row'>2</th>
                    <td>Washing car</td>
                    <td>Doe</td>
                </tr>
                <tr>
                    <th scope='row'>3</th>
                    <td>Hair Cutting</td>
                    <td>Maria</td>
                </tr>
                <tr>
                    <th scope='row'>4</th>
                    <td>Submitting Bills</td>
                    <td>John</td>
                </tr>
            </tbody>
      </table>
    )
}

export default TodosTable