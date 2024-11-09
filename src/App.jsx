import { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './components/Card';
import Loading from './components/Loading';


function App() {
 const [Isloading, setIsloading] = useState(true);
 const [products, setProducts] = useState([]);

//  function that Calls API To recive All product 's data '
 async function getProduct (){
    let {data} = await axios.get('https://fakestoreapi.com/products') ; 
    setProducts(data)
    setIsloading(false)

 }

//  To Recieve the Product Once the Component mount
 useEffect(()=>{
    getProduct();
 },[])

  return (
    <>
      {Isloading === true ? <Loading/> :
    <div>
         <div className='text-center p-3'>
            <h1 className='text-3xl font-bold'>Welcome To Simple Market</h1>
         </div>
         <div className='flex flex-wrap gap-2 mx-auto w-[95%] justify-between mt-3 py-5'>
         {products.map((product)=>(
            // send the Product as a prop to the Card Component 
            <Card product={product}/>
         ))}
         </div>
      </div> }
    </>
  )
}

export default App
