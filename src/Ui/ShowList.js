import React from 'react'
import { FaEdit } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdOutlineFavorite } from "react-icons/md"
import NumberTask from "./NumberTask"
import Task from "./Task"
import IconButton from './IconButton';
const ShowList = ({index , task, funhandleDeleteTask,funtoggleFavorite,funhandleEditTask}) => {
  return (
      <div key={index} className={`f-c bg-slate-400 w-1/2 mx-auto mt-4`}>
                            <div className='f-r w-full '>
                                <div className='flex items-center justify-start w-4/5 bg-slate-50 rounded-full ml-1'>
                                  <NumberTask index={index}/>
                                <Task task={task}/>
                                </div>
                                
                                <div className='flex justify-around gap-1 w-1/5'>

                                <IconButton  index={index} stlye={'btn-ro bg-red-950 hover:bg-red-700 transition' } 
                                fun={funhandleDeleteTask} >
                                    { <IoCheckmarkCircle />}
                                </IconButton>
                                <IconButton  index={index} stlye={`btn ${task.isFavorite ? 'text-pink-600' : ''}` } 
                                fun={funtoggleFavorite} >
                                    {task.isFavorite ? <GrFavorite /> : <MdOutlineFavorite />}
                                </IconButton>
                                <IconButton  index={index} stlye={'btn bg-green-950 hover:bg-green-700 transition' } 
                                fun={funhandleEditTask} >
                                     <FaEdit />
                                </IconButton>
                                 
                                </div>
                            </div>
                        </div>
  )
}

export default ShowList
