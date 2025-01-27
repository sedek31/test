import React from 'react'

const DeleteAll = ({title, funClick}) => {
  return (
    <div>
      <button className='btn uppercase hover:text-red-700 mt-5' onClick={funClick}>
             {title}
                </button>
    </div>
  )
}

export default DeleteAll
