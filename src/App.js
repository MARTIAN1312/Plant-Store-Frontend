// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Homepage from './pages/homepage';
import Plantspage from './pages/plants';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Component3 from './components/practice component/component3';  
import { useMemo,useState,useContext } from 'react';

export default function App() {
  const [add,setadd]=useState(0)
  
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/:category' element={<Plantspage />} />
      </Routes>
    </BrowserRouter>
    {/* <button onClick={()=>{setadd(add+1)}}>Add</button>
    <span>{add}</span>
    <Component3 add={add}/> */}
    {/* <person_name.Provider value={name}>
      <person_name2.Provider value={name2}>
        <Component3/>
      </person_name2.Provider>
    </person_name.Provider> */}
   
    </>
  )
}

