import React, { useEffect, useState } from 'react';
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import Input from '../input/Input';
import { MdOutlineFavorite } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";

const Show = ({title, btn}) => {
  const [editTask, setEditTask] = useState('');
  const [animt, setAnimt] = useState(null);
  const [show, setShow] = useState([]);
  const [numberFavorite, setNumberFavorite] = useState(0);

  useEffect(() => {
    const showItem = JSON.parse(localStorage.getItem('todolist')) || [];
    setShow(showItem);
    setNumberFavorite(showItem.filter(item => item.isFavorite).length);
  }, [editTask]);

  const deleteAll = () => {
    localStorage.clear();
    setShow([]);
    setNumberFavorite(0);
  };

  const deleteOne = (index) => {
    const deletetheone = JSON.parse(localStorage.getItem('todolist'));

    setAnimt(index);

    if (deletetheone && Array.isArray(deletetheone)) {
      deletetheone.splice(index, 1);
      localStorage.setItem('todolist', JSON.stringify(deletetheone));
      const i = deletetheone.filter((x) => x.isFavorite === true).length;
      setNumberFavorite(i);
      setShow(deletetheone);  // التحديث الفوري
      setAnimt(null);
    } else {
      console.error('No valid to-do list found.');
    }
  };

  const theFavorite = (index) => {
    const updatedItems = [...show];
    updatedItems[index].isFavorite = !updatedItems[index].isFavorite;
    setShow(updatedItems);
    localStorage.setItem('todolist', JSON.stringify(updatedItems));
    const i = updatedItems.filter((x) => x.isFavorite === true).length;
    setNumberFavorite(i);
  };

  const handleAddTask = (newTasks) => {
    setShow(newTasks);
    setNumberFavorite(newTasks.filter(item => item.isFavorite).length);
  };

  const theEditData = (index) => {
    const todoList = JSON.parse(localStorage.getItem('todolist')) || [];
    setEditTask(todoList[index].task);
  };

  return (
    <div className='per'>
      <div className='flex justify-center gap-4 items-center'>
        <h1 className='h my-auto'>{title}</h1>
        <span className='text-white font-bold'>number of Favorite: {numberFavorite}</span>
      </div>

      <Input
        title="input new item"
        btn="done"
        onAddTask={handleAddTask}
        editTask={editTask}
        setEditTask={setEditTask}
      />

      {show.length > 0 ? (
        show.map((z, index) => (
          <div key={index} className={`f-c bg-slate-400 w-1/2 mx-auto mt-3 ${animt === z.id ? "animat" : ""}`}>
            <div className='f-r w-full'>
              <div className='flex items-center justify-start w-4/5 bg-slate-50 rounded-full ml-1'>
                <span className='bg-black text-white'>{1 + index}</span>
                <span className='text-lg font-semibold text-right mx-2'>{z.task}</span>
              </div>
              <div className='flex justify-around gap-1 w-1/5'>
                <button className='btn-ro bg-red-950 hover:bg-red-700 transition' onClick={() => deleteOne(index)}>
                  <IoCheckmarkCircle />
                </button>
                {!z.isFavorite ? (
                  <button className='btn' onClick={() => theFavorite(index)}>
                    <MdOutlineFavorite />
                  </button>
                ) : (
                  <button className='btn text-pink-600' onClick={() => theFavorite(index)}>
                    <GrFavorite />
                  </button>
                )}
                <button onClick={() => theEditData(index)} className='btn bg-green-950 hover:bg-green-700 transition'>
                  <FaEdit />
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No tasks added yet!</p>
      )}

      {show.length < 1 ? (
        <h1 className='btn'>no data</h1>
      ) : (
        <button className='btn uppercase hover:text-red-700' onClick={deleteAll}>
          {btn}
        </button>
      )}
    </div>
  );
};

export default Show;
