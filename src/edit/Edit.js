import React, { useEffect, useState } from 'react'
import {  useParams ,useNavigate} from 'react-router-dom'
import Enter from '../components/Enter'
const Edit = ({title,btn}) => {
    
    const { index } = useParams(); // الحصول على index من URL
    const navigate = useNavigate();
    const [thevalue, setTheValue] = useState("");

    useEffect(() => {
        const todoList = JSON.parse(localStorage.getItem('todolist')) || [];
        if (todoList[index]) {
            setTheValue(todoList[index].task);
            
        } else {
            setTheValue("");
        }
    }, [index]);

    const handleEdit = () => {
        const todoList = JSON.parse(localStorage.getItem('todolist')) || [];
        if ( todoList[index]) {
            todoList[index].task = thevalue; // تحديث المهمة في المصفوفة
            localStorage.setItem('todolist', JSON.stringify(todoList)); // حفظ التغييرات في localStorage
            navigate('/');
        }
    };
    const changevalue=(e)=>{
      setTheValue(e.target.value)
    }
  return (
    
       
      // <div className=' f-c'>
      //   <label className='thetext bg-yellow-700'>{title}</label>
      //   <input    type='text' 
      //               value={thevalue} 
      //               onChange={changevalue} /> 
        
      //   <button className='btn thetext  my-6' 
         
      //     onClick={handleEdit} 
      //     disabled={!thevalue || typeof thevalue !== 'string' || !thevalue.trim()}>{btn}</button>
        
    
      // </div>
    
   <div>
    <Enter  title={title} btn={btn} govalue={thevalue}  funchange={changevalue} funhandle={handleEdit}  />
   </div>
  )
}

export default Edit

                    