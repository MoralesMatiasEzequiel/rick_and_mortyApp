import Landing from "./components/Landing/Landing";
import Form from "./components/Form/Form";
import Login from "./components/Login/Login";
import Characters from "./components/Characters/Characters";
import Detail from "./components/Detail/Detail";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path="/login" element={<Form/>} />
        <Route path="/login/identify" element={<Login/>}/>
        <Route path="/home" element={<Characters/>} />
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
