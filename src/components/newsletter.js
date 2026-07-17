import { useRef, useState } from "react"

export default function Newsletter(){
 const emailRef = useRef(null);
 const [email,setemail]=useState(null)
 const focusEmailInput = () => {
  emailRef.current.focus();
  emailRef.current.style.border="2px solid green";
  emailRef.current.style.color="green";
 }
  return(
    <>
     <div className="newsletter-section">
      <h1>
        Everything You Need to Know About Plants and More. No Spam, We Promise.
      </h1>
      <p>
        Subscribe now and get 15% off your first purchase 
      </p>
      <label htmlFor="email" style={{marginRight:'500px'}} >Enter your email here*</label>
      <input type="email" onChange={(e)=>setemail(e.target.value)} ref={emailRef} value={email}/>
      <form className='newsletter-form'>
        <input type="checkbox" id="consent" name="consent" value="consent" />
        <label htmlFor="consent" style={{margin: "20px 100px 20px 10px"}}>Yes, subscribe me to your newsletter</label>
        <button  onClick={focusEmailInput}>Subscribe</button>
      </form>
     </div>
       
    </>
  )
}