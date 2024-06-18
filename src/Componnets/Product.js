
import { useContext } from 'react'
import GlobalContext from './Context/GlobalContext'
import './ListProducts.css'


function Product(props) {
    const {productIncart,productInFav}=useContext(GlobalContext);
  return (
    <div className="product">
        <h3>{props.title}</h3>
        <img src={props.thumbnail} alt={props.title}/>
        <p>{props.description}</p>
        <h3>Price:{props.price}$</h3>
        <div className='buttons'>
        <button onClick={()=>productIncart(props.id)}>add to cart</button>
        <button onClick={()=>productInFav(props.id)}>add to fav</button>
        </div> 
    </div>
    
  )
}

export default Product