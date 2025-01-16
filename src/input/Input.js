import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Input = () => {
  // اخذ القيمة و تخزنها في حاله
    const [input,setinput]=useState('')
    const nav=useNavigate(); 
    // مساوي قيمة البيانات بالحالة 
    const changeinput=(event)=>{
        setinput(event.target.value)
    }
  
const handleinput=()=>{
  // استرجاع قيمه لو موجود  لو لأ خليها مصفوصفة فاضية 
    const newitem=JSON.parse(localStorage.getItem('todolist')) || [];
    // ازالة المسافات في البيانات المدخلة
  // اضافة في المصفوفة 
    newitem.push(input.trim())
    // اضافة في مذاكرة الداخلية المصفوفة 
    //باسم  todolist
    localStorage.setItem('todolist',JSON.stringify(newitem))
    nav('/')
}
  return (
    <div className='per'>
      <div className=' f-c'>
        <label className='thetext bg-red-800'>enter new item in list</label>
        <input value={input} onChange={changeinput} type='text '/> 
        <button className={`btn  w-full h-full uppercase p-6 cursor-pointer rounded-full  my-6 ${!input.trim() ? "bg-red-900" : "bg-green-800"}`}  onClick={handleinput}  disabled={!input.trim()}> done</button>
    
    
   
       
      </div>
    </div>
  )
}

export default Input
