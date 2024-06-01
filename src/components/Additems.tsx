import React from "react";

interface Props {
  addToOrder: (item: string) => void;
}

const AddItems: React.FC<Props> = ({ addToOrder }) => {

  const items = [
    { name: 'Кофта', price: 120 },
    { name: 'Штаны', price: 220 },
    { name: 'Футболка', price: 160 },
    { name: 'Обувь', price: 320 },
    { name: 'Свитшот', price: 190 },
    { name: 'Толстовка', price: 280 },
  ];

  const handleAddItem = (item: {name: string; price: number}) => {
    addToOrder(`${item.name} price: ${item.price} $`)
  };

  return (
    <div className="add-items">
      <h2>Add items</h2>
      {items.map((item, index) => (
        <button key={index} onClick={() => handleAddItem(item)}>
          {item.name} <br/> цена: {item.price} $
        </button>
      ))}
    </div>
  );
};

export default AddItems;