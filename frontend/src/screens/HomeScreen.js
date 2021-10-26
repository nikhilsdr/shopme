import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';
//import data from '../data';
//axios.defaults.baseURL = 'http://localhost:8000';

export default function HomeScreen() {
  
    const [allProducts, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
  
    const fecthData = async () => {
      try {
        setLoading(true);
        const  alldata  = await axios.get('/api/products');
        setProducts(alldata.data.products);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fecthData();
    }, []);
  return (
    
    <div> { console.log(allProducts) }
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="rows center">
          { allProducts && allProducts.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      )}
    </div>
  );
}