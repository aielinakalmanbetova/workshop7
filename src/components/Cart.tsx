import React from 'react';
import {CartItem} from '../../types';
import {PRODUCTS} from '../constants';

interface Props {
  cartItems: CartItem[];
  removeFromCart: (id: string) => void;
}


const Cart: React.FC<Props> = ({cartItems, removeFromCart}) => {
  const totalQty = cartItems.reduce((total, item) => total + item.qty, 0);
  const displayCartItems = cartItems.filter(item => item.qty > 0).map((cartItem) => {
    const product = PRODUCTS.find(p => p.id === cartItem.id);
    if (!product) {
      throw new Error('Product not found');
    }
    return {
      id: cartItem.id,
      product,
      qty: cartItem.qty,
      price: cartItem.qty * product.price,
    };
  });

  const totalPrice = displayCartItems.reduce((total, item) => total + item.price, 0);
  return (
    <div className="card">
      <div className="card-body">
        {totalQty === 0 ? (
          <div>Order is empty!<br/>Please add some items!</div>
        ) : (
          <>
            {displayCartItems.map((item) => (
              <div key={item.id} className="row">
                <div className="col">{item.product.title}</div>
                <div className="col-auto">x {item.qty} <strong>{item.price} KGS</strong></div>
                <div className="col-auto">
                  <button onClick={() => removeFromCart(item.id)} className="btn btn-danger">X</button>
                </div>
              </div>
            ))}
            <div>
              Total: <strong>{totalPrice} KGS</strong>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;