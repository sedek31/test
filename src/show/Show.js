import React, { useEffect, useState } from 'react'
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { Link} from 'react-router-dom'
import { MdOutlineFavorite } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
const Show = () => {
  const [animt,setanimt]=useState(null)
  //تخزين الداتا التي سوف يتم عرضها
    const [show ,setshow]=useState([])
    // localStorageعمل مكان في الذاكرة الداخليه 
    const [numberFavorite,setnumberFavorite]=useState(0)
    useEffect(()=>{
    const showitem=JSON.parse(localStorage.getItem('todolist'))
    // اذا كانت الذاكرة موجودة سوف تحدث الحالة 
    if (showitem) {
    setshow(showitem);
  } else {
    setshow([])}
    },[])
     //مسح جميع البيانات من الذاكرة
  const deleteall=()=>{
    localStorage.clear();
    setshow([])
    setnumberFavorite(0);
  }
//مسح داله واحده
  const deleteone = (index) => {
   
    // استرجاع البيانات من localStorage
    const deletetheone = JSON.parse(localStorage.getItem('todolist'));
    // console.log(deletetheone)
    setanimt(index)
    
    // التحقق من أن البيانات موجودة وصحيحة 
    if (deletetheone && Array.isArray(deletetheone)) {
      deletetheone.splice(index, 1); 
      localStorage.setItem('todolist', JSON.stringify(deletetheone)); 
    
      setTimeout(() => {
        setshow(deletetheone); 
        setanimt(null);  
      }, 1000);  
    } else {
      // إذا كانت البيانات مفقودة أو غير صحيحة
      console.error('No valid to-do list found.');
    }
  };
  // change 
  const theFavorite=(index)=>{
    const updatedItems = [...show];
    updatedItems[index].isFavorite = !updatedItems[index].isFavorite; // تغيير حالة المفضلة
    setshow(updatedItems);
    localStorage.setItem('todolist', JSON.stringify(updatedItems));
    const i = updatedItems.filter((x) => x.isFavorite === true).length;
    setnumberFavorite(i);
  }
  return (
    <div className='per'>
      <div className='flex justify-center gap-4 items-center'>
      <h1 className='h  my-auto'>to do list</h1>
      <span className='text-white font-bold'> number of Favorite : { numberFavorite}</span>
      </div>
        
        <Link to="/Input">
        <button className='btn-ro f-c hover:text-green-700'><span>new item</span><MdOutlineCreateNewFolder /></button>
        </Link>
        

     { show.length >0 ?(
         show.map((z,index)=>(
            <div key={index} className={`f-c bg-slate-400 w-1/2 mx-auto mt-3 ${animt===index?  "animat":""} `}>
        <div className='f-r w-full '>
            <div className='flex  items-center  justify-start w-4/5 bg-slate-50 rounded-full  ml-1'>    
            <span className='bg-black text-white'> {1+index}</span>
                  <span className='text-lg font-semibold  text-right mx-2 '>{z.task}</span>
            </div>
            <div className=' flex justify-around gap-1 w-1/5'>
                <button className='btn-ro  bg-red-950   hover:bg-red-700 transition' onClick={()=>deleteone(index)}><IoCheckmarkCircle  /></button>
              { !z.isFavorite?(  <button className='btn' onClick={()=>theFavorite(index)}><MdOutlineFavorite /></button>)
              :(<button className='btn text-pink-600' onClick={()=>theFavorite(index)}><GrFavorite  /> </button>)}
               <Link to={`/Edit/${index}`}><button   className=' btn  bg-green-950 hover:bg-green-700 transition '><FaEdit /></button></Link>
            </div>
        </div>
      </div>
        ))
     
     ):( <p>No tasks added yet!</p>)
    }  
     
       
     {
      show.length<1?( <h1 className='btn  '>no data</h1>):
      (<button className='btn uppercase hover:text-red-700  ' onClick={deleteall}>delet all</button>)
     }
       

    </div>
  )
}

export default Show
