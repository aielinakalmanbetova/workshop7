import React, {useState} from "react";
import Details from './components/Details';
import AddItems from './components/AddItems';

const App: React.FC = () => {
  const [detailsItems, setItems] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const addToOrder = (item: string, price: number) => {
    setItems([...detailsItems, item]);
    setTotalPrice(totalPrice + price);
  }

  const removeOrder = (index: number, price: number) => {
    const newItems = [...detailsItems];
    newItems.splice(index, 1);
    setItems(newItems);
    setTotalPrice(totalPrice - price);
  }

  return (
    <div className="details">
      <Details detailsItems={detailsItems} removeOrder={removeOrder} totalPrice={totalPrice}/>
      <AddItems addToOrder={addToOrder} />
    </div>
  );
};

export default App;
