import { useState } from "react";
import React from "react";

const TodoFormItem: React.FC<{addNewTodo: Function}> = (props)=>{

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    const setDescriptionChange = (event:any)=>{
        setDescription(event.target.value)
    }

    const setAssignedToChange = (event:any)=>{
        setAssigned(event.target.value);
    }

    const submitTodos = () =>{
        if(description !=='' && assigned !==''){
            props.addNewTodo(description, assigned);
            setDescription('');
            setAssigned('');
        }
    }

    return(
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input onChange={setAssignedToChange} type="text" className="form-control" value={assigned} required></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea onChange={setDescriptionChange} className="form-control" rows={3} value={description} required ></textarea>
                </div>
                <button type="button" className="btn btn-primary mt-3" onClick={submitTodos}>Add Todo</button>
            </form>
        </div>
    )
}

export default TodoFormItem