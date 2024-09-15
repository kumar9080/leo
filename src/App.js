import TodoFormItem from './components/TodoFormItem';
import ToDoTable from './components/TodoTable';
import { useState } from 'react';




function App() {
 let [todos, setTodos] = useState([{rowNumber: 1, rowDescription: 'Cycle Repair', assignedTo: 'Mayank Dayn'},
  {rowNumber: 2, rowDescription: 'Boot Polishing', assignedTo: 'Allan Musk'},
  {rowNumber: 3, rowDescription: 'Table Repair', assignedTo: 'Marks Zuby'},
  {rowNumber: 4, rowDescription: 'Laptop Repair', assignedTo: 'William Bergs'},
  {rowNumber: 5, rowDescription: 'Book Binding', assignedTo: 'Makrma Dayn'}
])

  const [showAddtodoForm, setAddtodoForm] = useState(false);

  const addNewTodo = (description, assigned)=>{
    if(todos.length > 0) {
      const newTodos = {rowNumber: todos.length + 1 , rowDescription: description, assignedTo: assigned}
      // todos.push(newTodos);
      setTodos(todos => [...todos,newTodos]);
    }
  };

  const deleteTodoRow = (deleteTodoRowNumber) =>{
    console.log(deleteTodoRowNumber);
    const filtered = todos.filter(value =>{
      return value.rowNumber !== deleteTodoRowNumber;
    })
    setTodos(filtered);
  }

  const showAddtodoFormState = ()=>{
    if(showAddtodoForm == true){
      setAddtodoForm(false);
    }else if(showAddtodoForm == false){
      setAddtodoForm(true)
    }
    console.log(showAddtodoForm)
  }

  return(
    <div className='container mt-5'>
      <div className='card'>
        <div className='card-header'>Your Todo's</div>
          <div className='card-body'>
            <ToDoTable todos={todos} deleteTodoRow={deleteTodoRow}/>
              <button onClick={showAddtodoFormState} className="btn btn-primary">{showAddtodoForm? 'Close todo Form ': 'Show Todo Form'}</button>
            {showAddtodoForm && <TodoFormItem addNewTodo={addNewTodo}/>}
          </div>
        </div>
      </div>
  )
}
export default App;
