import React from 'react'

const Enter = ({title,btn,govalue,funchange,funhandle,inputref}) => {
  return (
    <div>
      
      <div className=' f-c'>
        <label className='thetext bg-red-800'>{title}</label>
        <input value={govalue} onChange={funchange} type='text ' ref={inputref} /> 
        <button className={`btn  w-full h-full uppercase p-6 cursor-pointer rounded-full  my-6 
            ${!govalue.trim() ? "bg-red-900" : "bg-green-800"}`}  onClick={funhandle}
             disabled={!govalue.trim()}>{btn}</button>
    
    
   
       
      </div>
  
    </div>
  )
}

export default Enter
