export default function Subscriptionboxes(){
  return(
    <>
     <div className='subscriptionbox-section'>
       <div className='subscriptionbox-section-left'>
         <img src="https://static.wixstatic.com/media/c837a6_0a87f2af61664947831ac676766170e6~mv2.jpeg/v1/fill/w_766,h_779,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_0a87f2af61664947831ac676766170e6~mv2.jpeg" alt="meow" />
       </div>
       <div className='subscriptionbox-section-right'>
         <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'center', gap:'20px'}}>
          <h2>Shop Our Plant</h2>
          <h2>Subscription Boxes</h2>
          <p>and look forward to a new plant every month!</p>
          <h3>Cactus Lover Subscription</h3>
          <h3>Exotic Plants Subscription</h3>
          <button>Subscription Boxes</button>
         </div>
       </div>
     </div>
    </>
  )
} 