import React from 'react'
import Show from "../show/Show"
// import Input from "../input/Input";
// import Edit from "../edit/Edit";
import { BrowserRouter , Routes ,Route } from "react-router-dom";
const Home = () => {
  return (
    <div className='per'>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={  <Show title="to do list" btn="delete all"  />}/>
      {/* <Route path="/Input" element={  <Input title="input new item" btn="done"/>}/> */}
      {/* اضافة :index لاخذه منه رقم  العنصر */}
      {/* <Route path="/Edit/:index" element={  <Edit title="edit item in list" btn="edit" />} /> */}
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Home
