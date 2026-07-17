

import Hero from '../components/hero';
import NewArrivals from '../components/new-arrival';
import Shopbycategory from '../components/shopbycategory';
import Seedtosprout from '../components/seedtosprout';
import Subscriptionboxes from '../components/subscriptionboxes';
import Collage from '../components/collage';
import Newsletter from '../components/newsletter';
import Footer from '../components/footer';
import Navbar from '../components/navbar';




export default function Homepage() {
  
  return(
    <>
      <Navbar/>
      <Hero />
      <NewArrivals />
      <Shopbycategory />
      <Seedtosprout />
      <Subscriptionboxes />
      <Collage />
      <Newsletter />
      <Footer />
    </>
  )
}