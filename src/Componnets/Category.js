
import { useContext } from 'react'
import GlobalContext from './Context/GlobalContext'
import './Category.css'
import Product from "./Product"

function Category(props) {
    const {products,category}=useContext(GlobalContext);
  
  return (
    <div className="product-category">
            {
               products.map((item,index)=>{
                  if(item.category===category){
                    return (<Product key={index} {...item}/>)
                  }
                  return null
                }
                
)
                
            
            }
            </div>
  )
}

export default Category