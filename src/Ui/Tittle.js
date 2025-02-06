import React from 'react'

const Tittle = ({favoriteCount,tittleh1}) => {
  return (
    <div className='flex justify-center gap-4 items-center'>
                <h1 className='h my-auto'>{tittleh1}</h1>
                <span className='text-white font-bold'>عدد المفضلة: {favoriteCount}</span>
            </div>
  )
}

export default Tittle
