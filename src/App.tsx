import React, {useState} from "react";
import Details from './components/Details';
import AddItems from './components/Additems';

const App: React.FC = () => {
  const [detailsItems, setItems] = useState<string[]>([]);

  const addToOrder = (item: string) => {
    setItems([...detailsItems, item]);
  }

  const removeOrder = (index: number) => {
    const newItems = [...detailsItems];
    newItems.splice(index, 1);
    setItems(newItems);
  }

  return (
    <div className="details">
      <Details detailsItems={detailsItems} removeOrder={removeOrder} />
      <AddItems addToOrder={addToOrder} />
    </div>
  );
};

export default App;
