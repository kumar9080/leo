
function NewTodoForm(){
    return(
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned To</label>
                    <input className="form-control" type="text" required ></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows={3} required></textarea>
                </div>
                <button className="btn btn-primary">Add To</button>
            </form>
        </div>
    )
}

export default NewTodoForm