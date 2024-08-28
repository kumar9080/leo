function TodosItemRow() {

    const rowNumber = 1;
    const rowDescription = 'Watering Plants';
    const assignedTo = 'Joe'
    return(
        <tr>
            <th scope='row'>{{rowNumber}}</th>
            <td>{{rowDescription}}</td>
            <td>{{assignedTo}}</td>
        </tr>
    )
}
export default TodosItemRow