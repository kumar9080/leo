import { useState } from "react";

function NewTodoForm(props){

    const [description, setDescription] = useState('');
    const [assigned, setAssignedTo] = useState('');

    const descriptionChange =(e) => {
      setDescription(e.target.value)
  }

  const assignedChanged = (e) =>{
      setAssignedTo(e.target.value);
  }

  const submitTodos = ()=>{
    if(description !=='' && assigned !== ''){
        props.addNewTodosHandler(assigned, description)
        setDescription('');
        setAssignedTo('');
    }
}

function NewTodoForm(props){
    return(
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned To</label>
                    <input className="form-control" type="text" onChange={assignedChanged} value={assigned} required ></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows={3} onChange={descriptionChange}  value={description} required></textarea>
                </div>
                <button type="button" className="btn btn-primary" onClick={props.submitTodos}>Add Todo</button>
            </form>
        </div>
    )
}
}

export default NewTodoForm