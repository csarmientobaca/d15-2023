import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Trypage from './components/Trypage';
import Home from "./components/Home"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/try' element={<Trypage />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
