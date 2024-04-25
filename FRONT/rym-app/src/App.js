import Landing from "./components/Landing/Landing";
import Form from "./components/Form/Form";
import Login from "./components/Login/Login";
import Recover from "./components/Login/Recover/Recover";
import Home from "./components/Home/Home";
import Characters from "./components/Characters/Characters";
import Detail from "./components/Detail/Detail";
import Favorites from "./components/Favorites/Favorites";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path="/login" element={<Form/>} />
        <Route path="/login/identify" element={<Login/>}/>
        <Route path="/recover/initiate" element={<Recover/>}/>
        {/* <Route path="/recover/error" element={<Recover/>}/> */}
        <Route path="/home" element={<Home/>} />
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/favorites" element={<Favorites/>} />
      </Routes>
    </div>
  );
}

export default App;
