function TodosItemRow(props) {
    return(
        <tr onClick={()=>props.deleteRowItem(props.rowNumber)}>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.assignedTo}</td>
        </tr>
    )
}
export default TodosItemRow