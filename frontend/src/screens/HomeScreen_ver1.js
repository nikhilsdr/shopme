import React, {useEffect,useState} from 'react';
import axios from 'axios';
//import data from '../data';
import Product from '../components/Product'


const HomeScreen= ()=>{

  const[products, setProducts] = useState([]);
  const[myClickCount, setCounter] = useState(0);

    useEffect(()=>{

      const fetchProdutData = async () =>{
        try{
          const {data} = await axios('/api/products');
          setProducts(data);
          
        }
        catch(err){
          console.log(err.message);
        }
      
      }
      fetchProdutData();
    },[])

    
  

  const increment= ()=> {
     setCounter(myClickCount + 1)
  }

  const decrement= ()=> {
    setCounter(myClickCount - 1)
 }

 const reset= ()=> {
  setCounter(0)
}

    return(
     <span>
       <div className="rows center">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>

        
<div><button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
<button onClick={reset}>Reset</button> { myClickCount }
</div>
    </span>
            
    );

}

export default HomeScreen;