import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'


function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="rows">
            <div><Link className="brand" to='/'>ShopME</Link></div>
            <div>
                    <Link to="/cart">Cart</Link> | 
                    <Link to="/signin">Sign In</Link>
            </div>
        </header>
        <main>

        
          <Route path="/" component={ HomeScreen } exact ></Route>
          <Route path="/product/:id" component={ ProductScreen }  ></Route>

            
            
        </main>
        <footer className="rows center">
            All rights reserved to ShopME 2021
        </footer>
     </div>
     </BrowserRouter>
  );
}

export default App;
