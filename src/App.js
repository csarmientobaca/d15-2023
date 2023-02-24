import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import Trypage from './components/Trypage';



function App() {
  // const navigate = useNavigate()
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/try' element={<Trypage />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
