import Landing from "./components/Landing/Landing";
import Form from "./components/Form/Form";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path="/login" element={<Form/>} />
      </Routes>
    </div>
  );
}

export default App;
