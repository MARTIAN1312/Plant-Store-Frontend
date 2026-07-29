// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Homepage from './pages/homepage';
import Plantspage from './pages/plants';
import Signup from './pages/signupPage';
import Login from './pages/loginPage';
import {BrowserRouter,Routes,Route, Navigate, useNavigate, useNavigation} from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import { useContext } from 'react';

export const AuthContext = createContext();

export default function App() {
  // const navigate = useNavigation();
  const [login, setLogin] = useState(false)
  
  


  useEffect(() => {
    const authToken = localStorage.getItem("auth")
    if(authToken) setLogin(true)
    // else navigate("/login")
  }, [])
  
  return(
    <>
    <AuthContext.Provider value={{login, setLogin}}>
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
              <Route path="/*" element={<Navigate to="/login" replace />} />
            </Routes>}
      </BrowserRouter>

    </AuthContext.Provider>
   
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


