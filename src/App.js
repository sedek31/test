import Show from "./show/Show";
import Input from "./input/Input";
import Edit from "./edit/Edit";
import { BrowserRouter , Routes ,Route } from "react-router-dom";
function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={  <Show/>}/>
      <Route path="/Input" element={  <Input/>}/>
      {/* اضافة :index لاخذه منه رقم  العنصر */}
      <Route path="/Edit/:index" element={  <Edit/>}/>
    </Routes>
    </BrowserRouter>

   </div>
  );
}

export default App;
