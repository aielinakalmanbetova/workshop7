import {useState} from 'react';
import {PRODUCTS} from './constants';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';

const  initialState:CartItem[] = PRODUCTS.map(product => {
  return {
    id: product.id,
    qty: 0,
  };
});

const App = () => {
   const [cartItems, setCartItems] = useState<CartItem[]>(initialState);

   const addProductToCart = (id: string) => {
     setCartItems((prevState) => {
       return prevState.map(cartItem => {
         if (cartItem.id === id) {
           return {...cartItem, qty: cartItem.qty + 1};
       }
         return cartItem;
       });
     });
   };

   const removeProductFromCart = (id: string) => {
     setCartItems((prevState) => {
       return prevState.map(cartItem => {
         if (cartItem.id === id) {
           return{...cartItem, qty: 0};
         }
         return cartItem;
       });
     });
   };

  return (
    <div className="container-fluid mt-2">
      <div className="row">
        <div className="col-6">
          <Cart cartItems={cartItems} removeFromCart={removeProductFromCart}/>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card-body d-flex flex-wrap gap-2">
              {PRODUCTS.map(product => (
                 <ProductCard key={product.id} product={product} onClick={() => addProductToCart(product.id)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
