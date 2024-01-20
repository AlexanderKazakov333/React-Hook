import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Homepage from "./components/Homepage";
import Characters from "./components/Characters";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route exact path='/characters' element={<Characters/>}/>
      </Routes>
    </div>
  );
}

export default App;
