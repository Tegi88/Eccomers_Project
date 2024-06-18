
import { useEffect, useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom' 
import './App.css';
import NavBar from './Componnets/NavBar';
import ListProducts from './Componnets/ListProducts';
import Cart from './Componnets/Cart';
import GlobalContext from './Componnets/Context/GlobalContext';
import Category from './Componnets/Category';


function App() {
   const [products,setProducts]=useState([]);
   const [itemsIncart,setitemsIncart]=useState([]);
   const [itemsInFav,setitemsInFav]=useState([]);

   function productIncart(id){
    setitemsIncart([...itemsIncart,id])
   }
   function productInFav(id){
    setitemsInFav([...itemsInFav,id])
   }

   const deletItemInCart=(id)=>{
    const temp = itemsIncart.filter((item)=>item !== id);
    setitemsIncart([...temp])
   }


  useEffect(()=>{
    fetch('https://dummyjson.com/products?limit=200')
            .then(res=>res.json())
            .then(json=>setProducts(json.products))
  },[])
 
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
       
      <GlobalContext.Provider value={{products,productIncart,productInFav,itemsIncart,deletItemInCart,category:"mens-watches"}}>
      <Routes>
      <Route path="/" element={<ListProducts/>} />
      <Route  path="/men" element={<Category />}/>
      <Route path="/cart" element={<Cart />} />
      </Routes> 
      </GlobalContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
