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
                <TodosItemRow 
                    rowNumber={props.todos[0].rowNumber} 
                    rowDescription={props.todos[0].rowDescription} 
                    assignedTo={props.todos[0].assignedTo}
                />

                <TodosItemRow 
                    rowNumber={props.todos[1].rowNumber} 
                    rowDescription={props.todos[1].rowDescription} 
                    assignedTo={props.todos[1].assignedTo}
                />

                <TodosItemRow 
                    rowNumber={props.todos[2].rowNumber} 
                    rowDescription={props.todos[2].rowDescription} 
                    assignedTo={props.todos[2].assignedTo}
                />

                <TodosItemRow 
                    rowNumber={props.todos[3].rowNumber} 
                    rowDescription={props.todos[3].rowDescription} 
                    assignedTo={props.todos[3].assignedTo}
                />
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