 function TodoRowItem(props: {rowNumber: number, rowDescription:string, assignedTo:string, deleteTodoRow:Function}){
    return(
        <tr onClick={()=>props.deleteTodoRow(props.rowNumber)}>
            <th scope="row">{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.assignedTo}</td>
        </tr>
    )
}
export default TodoRowItem