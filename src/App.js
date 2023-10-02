import {Routes,Route} from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Images from './Images';
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
        <Route index element={<Home />} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/Images' element={<Images/>} />
        
        </Routes>

      <Footer/>
    </div>
  );
}

export default App;
