import logo from './logo.svg';
import './App.css';
import TodosTable from './components/TodosTable';
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState( [{rowNumber: 1, rowDescription: 'Feeding Dog', assignedTo: 'John'},
    {rowNumber: 2, rowDescription: 'Laundry service', assignedTo: 'Doe'},
    {rowNumber: 3, rowDescription: 'Car Servicing', assignedTo: 'John'},
    {rowNumber: 4, rowDescription: 'Bank Visiting', assignedTo: 'Maria'}])

    const addNewTodosHandler = ()=>{
      console.log('New Todos item added');
      if (todos.length > 0){
        const newTodos = {rowNumber : todos.length + 1, rowDescription:'Buying Medicine', assignedTo: 'Kumar'};
        // todos.push(newTodos)
        setTodos(todos => [...todos, newTodos]);
      }
      console.log(todos);
    }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodosTable todos={todos}/>
          <button className='btn btn-primary' onClick={addNewTodosHandler}>Add new Todos</button>
        </div>
      </div>
    </div>
  );
}

export default App;
