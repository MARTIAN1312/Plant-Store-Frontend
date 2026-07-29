import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
export default function Login(){
    const [email, setEmail ] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const login = async () => {
      try {
        const res = await fetch('http://localhost:8000/login', {
          method: "POST",
          headers: { 
            "Content-Type": "application/json" ,
          },
          body: JSON.stringify({
            email,
            password
          })
        })

        if(!res.ok) throw Error("Something went Wrong")
          
        const data = await res.json();
        localStorage.setItem('auth', JSON.stringify(data.authToken));
        navigate('/')
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }

    // const changeMail = (e) => {
    //   setEmail(e.target.value)
    // }
    return(
        <>
         <div className="authentication-page-row">
          <div className="authentication-container">
            <div className="login-page">
              <div style={{display:"flex",flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <h3>Don't have an account ? </h3>
              <h3>Please Sign up !</h3>
              </div>
              <button><Link to='/signup'>SIGN UP</Link></button>
            </div>
            <div className="signup-page">
              <h3>Welcome</h3>
              {/* <label>Name</label> */}
              
              {/* <label>Email</label> */}
              <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email"/>
              {/* <label>Password</label> */}
              <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password"/>
              <button onClick={login} >LOG IN</button>
            </div>
         </div>          
         </div>
        </>
    )
}