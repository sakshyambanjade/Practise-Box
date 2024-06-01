import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Props from './Pages/Props'
import UseState from './Pages/StateManagement/UseState'
import Api from '../src/Pages/Api Calling/api'
function App() {
  return (
   <> 
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/props" element={<Props/>}/>
    <Route path="/UseState" element={<UseState/>}/>
    <Route path="/Api" element={<Api/>}/>
  </Routes>
   </>
  );
}

export default App;
