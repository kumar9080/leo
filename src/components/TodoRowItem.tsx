import React from "react"

const TodoRowItem: React.FC<{rowNumber: number, rowDescription:string, assignedTo:string, deleteTodoRow:Function}> = (props) => {
    return(
        <tr onClick={()=>props.deleteTodoRow(props.rowNumber)}>
            <th scope="row">{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.assignedTo}</td>
        </tr>
    )
}
export default TodoRowItem