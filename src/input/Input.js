import React, { useRef, useState ,useEffect} from 'react'
import Enter from '../components/Enter'
const Input = ({title,btn,onAddTask,editTask,setEditTask}) => {
  // اخذ القيمة و تخزنها في حاله
    const [input,setinput]=useState(editTask||'')
    useEffect(()=>{
      if (editTask) {
        setinput(editTask); // تحديث input فقط إذا كان editTask مختلف عن input
      }
    }, [editTask]);
    const changeinput=(event)=>{
        setinput(event.target.value)
    }
    const ref=useRef(null)
    useEffect(() => {
      ref.current.focus();
    }, []); 
  
const handleinput=()=>{
  // استرجاع قيمه لو موجود  لو لأ خليها مصفوصفة فاضية 
    const newitem=JSON.parse(localStorage.getItem('todolist')) || [];
    const tasks ={
      
      task:input.trim(),
      isFavorite: false
    }
    if (editTask) {
      // تعديل المهمة إذا كانت موجودة في وضع التعديل
      const updatedItems = newitem.map((item) => {
        if (item.task === editTask) {
          return { ...item, task: input.trim() };
        }
        return item;
      });
      localStorage.setItem('todolist', JSON.stringify(updatedItems));
      setEditTask(''); // إعادة تعيين editTask بعد التعديل
    } else {
      newitem.push(tasks);
      localStorage.setItem('todolist', JSON.stringify(newitem));
    }
  
    setinput(''); // إعادة تعيين input بعد إضافة أو تعديل المهمة
    onAddTask(newitem); // إرسال البيانات المحدثة إلى المكون الأب
  };
 
  return (
   
      
  <div className='mt-7'>
    <Enter title={title} btn={btn} govalue={input} funchange={changeinput} funhandle={handleinput} inputref={ref} />
  </div>
  )
}

export default Input
