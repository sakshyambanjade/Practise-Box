import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Props from './Pages/Props'
function App() {
  return (
   <> 
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/props" element={<Props/>}/>

  </Routes>
   </>
  );
}

export default App;
