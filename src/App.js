// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Homepage from './pages/homepage';
import Plantspage from './pages/plants';
import Signup from './pages/signupPage';
import Login from './pages/loginPage';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function App() {
  const [login, setLogin] = useState(false)

  useEffect(() => {
    const authToken = localStorage.getItem("auth")
    if(authToken) setLogin(true)
  }, [login])
  
  return(
    <>
    <BrowserRouter>
     {login
     ?
     <Routes>
       <Route path='/' element={<Homepage />} />
      <Route path="/:category" element={<Plantspage />} />
      </Routes>
    :
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/signup' element={<Signup/>} /> 
         <Route path='/login' element={<Login/>} />
         <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>}
    </BrowserRouter>
    {/* <Login/> */}
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


