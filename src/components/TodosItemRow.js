function TodosItemRow(props) {
    const rowNumber = 1;
    const rowDescription = 'Watering Plants';
    const assignedTo = 'Joe'
    return(
        <tr>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.assignedTo}</td>
        </tr>
    )
}
export default TodosItemRow