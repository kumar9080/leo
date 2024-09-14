import './App.css';

function App() {
  return(
    <div className='container mt-5'>
      <div className='card'>
        <div className='card-header'>Your Todo's</div>
        <div>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Description</th>
                <th scope='col'>Assigned To</th>
              </tr>
            </thead>
            <tbody className='card-body'>
              <tr>
                <th scope='row'>1</th>
                <td>Feed Dog</td>
                <td>John Doe</td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>Hair Cut</td>
                <td>Eric Schawn</td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>Car Wash</td>
                <td>Marina williams</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
  )

}
export default App;
