import React from 'react'


const IconButton = ({stlye,fun,
    index,children
,
}) => {
  return (
    <div>
       <button className={stlye} onClick={() => fun(index)}>
       {children}
                                    </button>
    </div>
  )
}

export default IconButton
