import './App.css';
import TodosTable from './components/TodosTable';
import { useState } from 'react';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const [todos, setTodos] = useState( [{rowNumber: 1, rowDescription: 'Feeding Dog', assignedTo: 'John'},
    {rowNumber: 2, rowDescription: 'Laundry service', assignedTo: 'Doe'},
    {rowNumber: 3, rowDescription: 'Car Servicing', assignedTo: 'John'},
    {rowNumber: 4, rowDescription: 'Bank Visiting', assignedTo: 'Maria'}])

    const addNewTodosHandler = (assigned, description)=>{
      console.log('New Todos item added',assigned);
      let rowNumber = 0;
      if (todos.length > 0){
        rowNumber = todos[todos.length - 1].rowNumber + 1;
        const newTodos = {rowNumber : rowNumber, rowDescription: description, assignedTo: assigned};
        // todos.push(newTodos)
        setTodos(todos => [...todos, newTodos]);
      }else {
        rowNumber = 1;
      }
    }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodosTable todos={todos}/>
          <NewTodoForm addNewTodosHandler={addNewTodosHandler} />
        </div>
      </div>
    </div>
  );
}
export default App;
