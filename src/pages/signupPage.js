import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { AuthContext } from "../App.js"
export default function Signup(){
  const [name,setName]= useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const {login, setLogin} = useContext(AuthContext)
  const navigate = useNavigate();

  const signup= async()=>{
    try {
      const res = await fetch('http://localhost:8000/signup',{
          method: 'POST',
          headers: { 
                "Content-Type": "application/json" ,
              },
              body: JSON.stringify({
                name,
                email,
                password
              })
      })
      if(!res.ok) throw Error("Something went wrong")

      const data = await res.json();
      setLogin(true)
      localStorage.setItem("auth", data.authToken)
      navigate("/")
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }
  
    return(
        <>
         <div className="authentication-page-row">
         <div className="authentication-container">
            <div className="login-page">
              <h3>If you already have an account just Login . </h3>
              <button><Link to='/login'>LOG IN</Link></button>
            </div>
            <div className="signup-page">
              <h3>Create Your Account</h3>
              {/* <label>Name</label> */}
              <input type="text" onChange={ (e)=> setName(e.target.value)} value={name} placeholder="Name"/>
              {/* <label>Email</label> */}
              <input type="email" onChange={ (e)=> setEmail(e.target.value)} value={email} placeholder="Email"/>
              {/* <label>Password</label> */}
              <input type="password" onChange={ (e)=> setPassword(e.target.value)} value={password} placeholder="Password"/>
              <button onClick={signup} >SignUP</button>
            </div>
         </div>
         </div>
        </>
    )
}