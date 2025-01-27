import React, { useEffect, useState } from 'react';
// import { FaEdit } from "react-icons/fa";
// import { GrFavorite } from "react-icons/gr";
// import { IoCheckmarkCircle } from "react-icons/io5";
// import { MdOutlineFavorite } from "react-icons/md";
import ToDoField from '../components/ToDoField';
import Tittle from '../Ui/Tittle';
import DeleteAll from '../Ui/DeleteAll';
import EmptyData from '../Ui/EmptyData';
import ShowList from '../Ui/ShowList';
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
           <Tittle favoriteCount={favoriteCount} tittleh1="to do list"/>

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
                    <ShowList index={index} task={task.task}  funhandleDeleteTask={ handleDeleteTask(index)}
                    funtoggleFavorite={toggleFavorite(index)} funhandleEditTask={handleEditTask(index)}
                    />
                   
                ))
            ) : (
             <EmptyData  title=" you do not put any task"/>
               
            )}

            {tasks.length > 0 && (
                <DeleteAll title= ' delete all' funClick={deleteAllTasks}/>
            )}
        </div>
    );
};

export default Home;