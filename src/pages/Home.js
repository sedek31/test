import React, { useEffect, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdOutlineFavorite } from "react-icons/md";
import ToDoField from '../components/ToDoField';

const Home = () => {
  //عدد المهام
    const [tasks, setTasks] = useState([]);
  // قيمة الادخال
    const [input, setInput] = useState('');
    //القيمة التي سوف يتم تعديلها 
    const [editIndex, setEditIndex] = useState(null);
//جلب الداتا و تحديث عدد المهام
// ملحوظة لو فارغة  هيحدثها برضوا 
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('todolist')) || [];
        setTasks(storedTasks);
    }, []);
// كل مره عدد المهام يتغير بيتم تعديل الداتا
    useEffect(() => {
        localStorage.setItem('todolist', JSON.stringify(tasks));
    }, [tasks]);
// دالة مسئولة عن جلب القيمة و تحديث قيمة االادخال
    const handleInputChange = (event) => {
        setInput(event.target.value);
    };
//دالة الارسال 
    const handleTaskSubmit = () => {
        const trimmedInput = input.trim();
        // في حالة الفراغ أ,و مسافات يتم الخروج من الدالة
        if (!trimmedInput) return;

        setTasks(prevTasks => {
            if (editIndex !== null) {
                //نسخ الدااله 
                const updatedTasks = [...prevTasks];
                updatedTasks[editIndex].task = trimmedInput;
                setEditIndex(null);
                return updatedTasks;
            } else {
                return [...prevTasks, { task: trimmedInput, isFavorite: false }];
            }
        });
        setInput('');
    };
//مسح العنصرواحد
    const handleDeleteTask = (index) => {
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
    };

    // تحديد العنصر مفضل او لا
    const toggleFavorite = (index) => {
      setTasks(prevTasks =>
          prevTasks.map((task, i) =>
              i === index ? { ...task, isFavorite: !task.isFavorite } : task
          )
      );
  };
// ببعت العنصر للتغير 
    const handleEditTask = (index) => {
        setInput(tasks[index].task);
        setEditIndex(index);
    };
// مسح كل الداتا
    const deleteAllTasks = () => {
        setTasks([]);
    };
//عدد لاف 
    const favoriteCount = tasks.filter(task => task.isFavorite).length;

    return (
        <div className='per'>
            <div className='flex justify-center gap-4 items-center'>
                <h1 className='h my-auto'>to do list</h1>
                <span className='text-white font-bold'>عدد المفضلة: {favoriteCount}</span>
            </div>

            <div className='mt-7'>
                <ToDoField
                    title={editIndex!==null ?"change tasak":"enter new task"}
                    btn={editIndex !== null ? "change" : "add"}
                    value={input}
                    onChange={handleInputChange}
                    onSubmit={handleTaskSubmit}
                     
                />
            </div>

            {tasks.length > 0 ? (
                tasks.map((task, index) => (
                    <div key={index} className={`f-c bg-slate-400 w-1/2 mx-auto mt-4`}>
                        <div className='f-r w-full '>
                            <div className='flex items-center justify-start w-4/5 bg-slate-50 rounded-full ml-1'>
                                <span className='bg-black text-white'>{1 + index}</span>
                                <span className='text-lg font-semibold text-right mx-2'>{task.task}</span>
                            </div>
                            <div className='flex justify-around gap-1 w-1/5'>
                                <button className='btn-ro bg-red-950 hover:bg-red-700 transition' onClick={() => handleDeleteTask(index)}>
                                    <IoCheckmarkCircle />
                                </button>
                                <button className={`btn ${task.isFavorite ? 'text-pink-600' : ''}`} onClick={() => toggleFavorite(index)}>
                                    {task.isFavorite ? <GrFavorite /> : <MdOutlineFavorite />}
                                </button>
                                <button onClick={() => handleEditTask(index)} className='btn bg-green-950 hover:bg-green-700 transition'>
                                    <FaEdit />
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className='mt-6'>لم يتم إضافة أي مهام حتى الآن!</p>
            )}

            {tasks.length > 0 && (
                <button className='btn uppercase hover:text-red-700 mt-5' onClick={deleteAllTasks}>
                    حذف الكل
                </button>
            )}
        </div>
    );
};

export default Home;