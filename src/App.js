
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import All from './Components/All'
import Add from './Components/Add';
import Edit from './Components/Edit';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all' element={<All />} />
        <Route path='/add'element={<Add />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
      </BrowserRouter>
     </div>
  );
}

export default App;
