import { useContext } from 'react'
import GlobalContext from './Context/GlobalContext'
import './Cart.css'

function Cart() {
    const {itemsIncart,products,deletItemInCart}=useContext(GlobalContext);
  return (
    <div>
        {
            itemsIncart.map((item,index)=>{
                const fil=products.filter((v)=>v.id===item)[0]
                return (
                    <div className='allcart'key={index}>
                      <div className='cart' >
                        <h3>{fil.title}</h3>
                        <img src={fil.thumbnail} alt={fil.title}/>
                        <p>{fil.description}</p>
                        <h3>Price:{fil.price}$</h3>
                        <button onClick={()=>deletItemInCart(fil.id)}>❌DEL</button>
                      </div>
                    </div>
                    
                )
                
            })
        }
    </div>
  )
}

export default Cart