import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import { useState } from 'react';
import { useRef } from 'react';
function App() {
  const [task,setTask] = useState("");
  const [items,setItems] = useState([]);
  const [checkedItems,setCheckedItems] = useState({});

  const addItem = ()=> {
    if(task.trim()){
          setItems(a => [...a,task]);
          setTask("");
    }

  };
  const delItem = (index)=> {
    setItems(items.filter((item,i)=> i != index));
  };
  const checkItem = (index)=>{
      setCheckedItems(prev=> ({...prev , [index] : !prev[index]}));
  }
  return (
    <>
      <Header/>

      <div className='d-flex'>
        <h3 className='me-3'>Add a task :</h3>
        <input className='me-3' type="text" value={task} onChange={(e)=>{setTask(e.target.value)}} placeholder='Do laundry ?'/>
        <button onClick={addItem} className='btn btn-primary'>Add</button>
      </div>
      <div>
        <ul style={{marginTop : "20px"}}>
          {items.map((item,index) =>
          
          <li style=
            {{fontSize : "30px" ,
            fontFamily : "monospace",
            textDecorationLine : checkedItems[index] ? "line-through" : "none" ,
            }} key={index}>
            {item}
            <input
              checked = {checkItem[index] || false }
             onChange={()=> checkItem(index)}  className='form-check-input m-2' type='checkbox'/>
            <button onClick={ ()=>delItem(index) } className='btn btn-danger m-1'>X</button>
            </li>
          )}
        </ul>
      </div>
    </>
  )
}

export default App
