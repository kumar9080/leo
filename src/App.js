import logo from './logo.svg';
import './App.css';
import TodosItemRow from './components/TodosItemRow';

function App() {

  const todos = [{rowNumber: 1, rowDescription: 'Feeding Dog', assignedTo: 'John'},
    {rowNumber: 2, rowDescription: 'Laundry service', assignedTo: 'Doe'},
    {rowNumber: 3, rowDescription: 'Car Servicing', assignedTo: 'John'},
    {rowNumber: 4, rowDescription: 'Bank Visiting', assignedTo: 'Maria'}]

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Description</th>
                <th scope='col'>Assigned To</th>
              </tr>
            </thead>
            <tbody>
              <TodosItemRow 
              rowNumber={todos[0].rowNumber} 
              rowDescription={todos[0].rowDescription} 
              assignedTo={todos[0].assignedTo}/>

              <TodosItemRow 
              rowNumber={todos[1].rowNumber} 
              rowDescription={todos[1].rowDescription} 
              assignedTo={todos[1].assignedTo}/>

              <TodosItemRow 
              rowNumber={todos[2].rowNumber} 
              rowDescription={todos[2].rowDescription} 
              assignedTo={todos[2].assignedTo}/>

              <TodosItemRow 
              rowNumber={todos[3].rowNumber} 
              rowDescription={todos[3].rowDescription} 
              assignedTo={todos[3].assignedTo}/>
              
              <tr>
                <th scope='row'>2</th>
                <td>Washing car</td>
                <td>Doe</td>
              </tr>
              <tr>
                <th scope='row'>3</th>
                <td>Hair Cutting</td>
                <td>Maria</td>
              </tr>
              <tr>
                <th scope='row'>4</th>
                <td>Submitting Bills</td>
                <td>John</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
