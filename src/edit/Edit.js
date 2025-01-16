import React, { useEffect, useState } from 'react'
import {  useParams ,useNavigate} from 'react-router-dom'
const Edit = () => {
    
    const { index } = useParams(); // الحصول على index من URL
    const navigate = useNavigate();
    const [thevalue, setTheValue] = useState("");

    useEffect(() => {
        const todoList = JSON.parse(localStorage.getItem('todolist')) || [];
        if (todoList[index]) {
            setTheValue(todoList[index]);
        } else {
            setTheValue("");
        }
    }, [index]);

    const handleEdit = () => {
        const todoList = JSON.parse(localStorage.getItem('todolist')) || [];
        if (index !== undefined && todoList[index]) {
            todoList[index] = thevalue; // تحديث المهمة في المصفوفة
            localStorage.setItem('todolist', JSON.stringify(todoList)); // حفظ التغييرات في localStorage
            navigate('/');
        }
    };
  return (
    <div>
       <div className='per'>
      <div className=' f-c'>
        <label className='thetext bg-red-800'>edit item in list</label>
        <input    type='text' 
                    value={thevalue} 
                    onChange={(e) => setTheValue(e.target.value)} /> 
        
        <button className='btn thetext  my-6' 
         
          onClick={handleEdit} 
          disabled={!thevalue.trim()}> edit</button>
        
    
      </div>
    </div>
    </div>
  )
}

export default Edit

                    