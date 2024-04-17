import Landing from "./components/Landing/Landing";
import Form from "./components/Form/Form";
import Characters from "./components/Characters/Characters";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path="/login" element={<Form/>} />
        <Route path="/home" element={<Characters/>} />
      </Routes>
    </div>
  );
}

export default App;
