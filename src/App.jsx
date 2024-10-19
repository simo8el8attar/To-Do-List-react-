import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import { useState } from 'react';
import { useRef } from 'react';
function App() {
  const [task,setTask] = useState(null);
  const [items,setItems] = useState([]);

  const addItem = ()=> {
    setItems(a => [...a,task]);
  }
  return (
    <>
      <Header/>
      <div className='d-flex'>
        <h3 className='me-3'>Add a task :</h3>
        <input className='me-3' type="text" onChange={(e)=>{setTask(e.target.value)}} placeholder='Do laundry ?'/>
        <button onClick={addItem} className='btn btn-primary'>Add</button>
      </div>
      <div>
        <ul style={{marginTop : "20px"}}>
          {items.map((item,index) =>
          <div>
          <li style={{fontSize : "30px" , fontFamily : "monospace"}} key={index}>{item}</li>
          <button className='btn btn-success m-3'> check task </button>
          <button className='btn btn-danger'> Delete task </button>
          </div>
          )}
        </ul>
      </div>
    </>
  )
}

export default App
