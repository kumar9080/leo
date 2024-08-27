import logo from './logo.svg';
import './App.css';

function App() {
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
              <tr>
                <th scope='row'>1</th>
                <td>Watering Plants</td>
                <td>Joe</td>
              </tr>
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
