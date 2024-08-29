import { useState } from "react"

function NewTodoForm(props){


    const [assigned, setAssignedTo] = useState('');
    const [description, setDescription] = useState('');

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
    return(
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned To</label>
                    <input 
                    type='text'
                    required
                    className='form-control' 
                    onChange={assignedChanged}
                    value={assigned} 
                     ></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                        <textarea 
                        className="form-control"
                        required
                        rows={3} 
                        onChange={descriptionChange} 
                        value={description}
                    ></textarea>
                </div>
                <button type="button" className="btn btn-primary mt-3" onClick={submitTodos}>Add Todo</button>
            </form>
        </div>
    )
}

export default NewTodoForm