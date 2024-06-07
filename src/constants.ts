import hamburger from '../src/assets/hamburger.png';
import drink from '../src/assets/drnk.png';
import {Product} from '../types';

export const PRODUCTS: Product[] = [
  {id: '1', title: 'Hamburger', price: 80, icon: hamburger},
  {id: '2', title: 'Cheeseburger', price: 180, icon: hamburger},
  {id: '3', title: 'Chicken', price: 580, icon: hamburger},
  {id: '4', title: 'Tea', price: 380, icon: drink},
  {id: '5', title: 'Cola', price: 90, icon: drink},
  {id: '6', title: 'Pepsi', price: 120, icon: drink},
];