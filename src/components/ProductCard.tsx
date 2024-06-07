import React from 'react';
import {Product} from '../../types';

interface Props {
  product: Product;
  onClick: React.MouseEventHandler;
}

const ProductCard: React.FC<Props> = ({product}) => {
  return (
    <div className="car" style={{width: '300px', cursor: 'pointer'}} onClick={onclick}>
      <div className="card-body row">
        <div className="col-auto">
          <img src={product.icon} alt={product.title + 'image'} style={{maxWidth: '100px'}}/>
        </div>
        <div className="col-auto">
          <h5>{product.title}</h5>
          <p>Price: {product.price} KGS</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;