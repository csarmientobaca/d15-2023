import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Trypage from './components/Trypage';
import Home from "./components/Home"
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <MainPage />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/try' element={<Trypage />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
