import React from 'react'

const NumberTask = ({index}) => {
  return (
    <div>
        <span className='bg-black text-white'>{1 + index}</span>
    </div>
  )
}

export default NumberTask
