import React from 'react'


const IconButton = ({fun,
    children}) => {
  return (
    <div>
       <button cl onClick={() => fun()}>
       {children}
           </button>
    </div>
  )
}

export default IconButton
