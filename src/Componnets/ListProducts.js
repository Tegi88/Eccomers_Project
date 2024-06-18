import Product from "./Product"
import { useContext } from 'react'
import GlobalContext from './Context/GlobalContext'
import './ListProducts.css'

function ListProducts(props) {
    const {products}=useContext(GlobalContext);
    return(
        <div className="continer">
            <div className="row">
            {
                products.map((item,index)=>{
                    return(
                        <Product key={index} {...item}/>
                    )
                })
            }
            </div>
            
        </div>
    )
}

export default ListProducts