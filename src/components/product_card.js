import {useState} from 'react';
export function ProductCard({product}){
  const [Image,setImage]=useState(product.imageBefore);
  const {name, price, imageBefore, imageAfter, category, discounted_price} = product;
    return(
        <>
         <div className='product-card' >
          <div className='product-image'
           onMouseEnter={()=>setImage(imageAfter)}
           onMouseLeave={()=>setImage(imageBefore)}>
            {/* <img onMouseEnter={(e) => { e.target.src = imageAfter; }} onMouseLeave={(e) => { e.target.src = imageBefore; }} src={imageBefore} alt={name}/> */}
            {product.discounted_price && <span className='badge'>Sale</span>}
            <img src={Image} alt={name}></img>
          </div>   
          <div className='product-details'>
            <h3>{name}</h3>
            <div className='product-price'>
             {product.discountedPrice ?(
              <>
               <span className='oldPrice'>${product.price}</span>
               <span className='newPrice'>${product.discounted_price}</span>
              </>
             ):(
               <span className='oldPrice'>${product.price}</span>
             )}
            </div>
            {/* {discountedPrice && <p><del>{discountedPrice}</del></p> }
            <p>${price.toFixed(2)}</p> */}
          </div>
          <div className='product-actions'>
            <button>Add to Cart</button>
          </div>
         </div>         
        </>
    )
}