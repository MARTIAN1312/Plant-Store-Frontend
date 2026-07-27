import { Link } from "react-router-dom"
export default function Signup(){
    return(
        <>
         <div className="authentication-page-row`">
         <div className="authentication-container">
            <div className="login-page">
              <h3>If you already have an account just Login . </h3>
              <button><Link to='/login'>LOG IN</Link></button>
            </div>
            <div className="signup-page">
              <h3>Create Your Account</h3>
              {/* <label>Name</label> */}
              <input type="text" placeholder="Name"/>
              {/* <label>Email</label> */}
              <input type="email" placeholder="Email"/>
              {/* <label>Password</label> */}
              <input type="password" placeholder="Password"/>
              <button >SignUP</button>
            </div>
         </div>
         </div>
        </>
    )
}