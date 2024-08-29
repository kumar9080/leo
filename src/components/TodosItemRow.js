function TodosItemRow(props) {
    return(
        <tr>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.assignedTo}</td>
        </tr>
    )
}
export default TodosItemRow