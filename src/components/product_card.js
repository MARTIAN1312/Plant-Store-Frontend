
export function ProductCard({product}){

  const {name, price, imageBefore, imageAfter, category, discountedPrice} = product;
    return(
        <>
         <div className='product-card' >
          <div className='product-image'>
            <img onMouseEnter={(e) => { e.target.src = imageAfter; }} onMouseLeave={(e) => { e.target.src = imageBefore; }} src={imageBefore} alt={name}/>
          </div>   
          <div className='product-details'>
            <p>{name}</p>
            {discountedPrice && <p><del>{discountedPrice}</del></p> }
            <p>${price.toFixed(2)}</p>
          </div>
          <div className='product-actions'>
            <button>Add to Cart</button>
          </div>
         </div>         
        </>
    )
}