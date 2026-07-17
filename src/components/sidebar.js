import '../pages/plants.css'
import Rcslider from './rc-slider'
import { Link } from 'react-router-dom';
export default function Sidebar(){
    return(
        <div className="sidebar">
            
            <ul>
                <li>Browse by</li>
                <hr/>
                <li>All Products </li>
                <li>New Products</li>
                <li><Link to="/plants">Plants</Link></li>
                <li><Link to="/pots">Pots</Link></li>
                <li><Link to='/sale'>Sale</Link></li>
                <li><Link to='/subscriptions'>Subscriptions</Link></li>
                <li>Filter by</li>
                <hr/>
                <li>Price</li>
            </ul>
            <Rcslider/>
            <hr/>
            <li>Color +</li>
        </div>
    )
}