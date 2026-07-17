import { useState,useEffect} from 'react';
import {Link} from 'react-router-dom';


export default function Navbar(){
 
   const [isvisible, setisvisible] = useState(true);
   const [lastscroll,setlastscroll] = useState(0);

   useEffect(()=>{
    const handlescroll= ()=>{
      const currentscroll= window.scrollY;
      if(currentscroll>lastscroll && currentscroll>100){
        setisvisible(false);
      }else{
        setisvisible(true);
      }
      setlastscroll(currentscroll);
    }
    window.addEventListener('scroll',handlescroll);
    return()=>window.removeEventListener('scroll',handlescroll);},[lastscroll])
    
  return(
    <>
     <nav className="navbar" style={{transform: isvisible ? "translateY(0)" : "translateY(-100%)"}}>
      <div className='nav-wrapper'>
        <div className="nav-links">
          <Link to="/plants">Plants</Link>
          <Link to="/pots">Pots</Link>
          <Link to="/sale">Sale</Link>
          <Link to="/subscriptions">Subscriptions</Link>
        </div>
      </div>
      
      <div>
         <Link to="/">
          <img src='https://static.wixstatic.com/shapes/c837a6_5bb979af6e4547baa7cdd9567a0bcd50.svg' alt='logo' style={{width:'100px', height:'100px'}}/>
         </Link>
      </div>

      <div className='nav-right'>
        <div className='nav-actions' style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'30px'}}>
        
       <button className="login">
        <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="22"
            height="22">
        <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM6.02332 15.4163C7.49083 17.6069 9.69511 19 12.1597 19C14.6243 19 16.8286 17.6069 18.2961 15.4163C16.6885 13.9172 14.5312 13 12.1597 13C9.78821 13 7.63095 13.9172 6.02332 15.4163ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" />
       </svg> Login </button>


        <a href="/" style={{color:'white'}}><svg xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" fill="currentColor" width="35" height="35">
          <path d="M15.0049 2.00281C17.214 2.00281 19.0049 3.79367 19.0049 6.00281C19.0049 6.73184 18.8098 7.41532 18.4691 8.00392L23.0049 8.00281V10.0028H21.0049V20.0028C21.0049 20.5551 20.5572 21.0028 20.0049 21.0028H4.00488C3.4526 21.0028 3.00488 20.5551 3.00488 20.0028V10.0028H1.00488V8.00281L5.54065 8.00392C5.19992 7.41532 5.00488 6.73184 5.00488 6.00281C5.00488 3.79367 6.79574 2.00281 9.00488 2.00281C10.2001 2.00281 11.2729 2.52702 12.0058 3.35807C12.7369 2.52702 13.8097 2.00281 15.0049 2.00281ZM11.0049 10.0028H5.00488V19.0028H11.0049V10.0028ZM19.0049 10.0028H13.0049V19.0028H19.0049V10.0028ZM9.00488 4.00281C7.90031 4.00281 7.00488 4.89824 7.00488 6.00281C7.00488 7.05717 7.82076 7.92097 8.85562 7.99732L9.00488 8.00281H11.0049V6.00281C11.0049 5.00116 10.2686 4.1715 9.30766 4.02558L9.15415 4.00829L9.00488 4.00281ZM15.0049 4.00281C13.9505 4.00281 13.0867 4.81869 13.0104 5.85355L13.0049 6.00281V8.00281H15.0049C16.0592 8.00281 16.923 7.18693 16.9994 6.15207L17.0049 6.00281C17.0049 4.89824 16.1095 4.00281 15.0049 4.00281Z"></path></svg></a>

        <a href="/" style={{color:'white'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="35" height="35">
        <path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path></svg></a>

      </div>
      </div>
     </nav>
    </>
  )
}