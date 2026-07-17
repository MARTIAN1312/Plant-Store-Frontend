export default function Footer(){
  return(
    <>
     <div className='Footer-section'>
      <div className='footer-logo'>
        <img src="https://static.wixstatic.com/shapes/c837a6_5bb979af6e4547baa7cdd9567a0bcd50.svg" alt="logo" />
      </div>
      <hr/>
      <div className='footer-links'>
        <div className='footer-link-coloumn'>
          <h2>Contact</h2>
          <p><a href="/">Address: 500 Terry</a></p>
          <p><a href="/">Francine Street</a></p>
          <p><a href="/">San Francisco, CA 94158</a></p>
          <p><a href="/">Phone: 123-456-7890</a></p>
          <p><a href="/">info@mysite.com</a></p>
        </div>
        <div className='footer-link-coloumn'>
          <h2>Shop</h2>
          <p><a href="/">Shop All</a></p>
          <p><a href="/">Plants</a></p>
          <p><a href="/">Pots</a></p>
          <p><a href="/">Sale</a></p>
          <p><a href="/">Subscriptions</a></p>
        </div>
        <div className='footer-link-coloumn'>
          <h2>Helpful Links</h2>
          <p><a href="/">FAQs</a></p>
          <p><a href="/">Shipping Policy</a></p>
          <p><a href="/">Refund Policy</a></p>
          <p><a href="/">Terms and Conditions</a></p>
          <p><a href="/">Accessibility Statement</a></p>
          <p><a href="/">Privacy Policy</a></p>
        </div>
        <div className='footer-link-coloumn'>
          <h2>Company</h2>
          <p><a href="/">Our Story</a></p>
          <p><a href="/">Contact Us</a></p>
        </div>
        <div className='footer-link-coloumn'>
          <h2>Opening Hours</h2>
          <p><a href="/">Monday - Friday: 7am - 10pm</a></p>
          <p><a href="/">Saturday: 8am - 10pm</a></p>
          <p><a href="/">Sunday: 8am-11pm</a></p>
        </div>                                
      </div>
      <hr/>
      <div className='copyright'>
        <p>© 2035 by Sprout. Powered and secured by Wix</p>
      </div>
     </div>
    </>
  )
  }