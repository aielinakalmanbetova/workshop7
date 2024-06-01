import React from "react";

interface Props {
  detailsItems: string[];
  removeOrder: (index: number, price: number) => void;
  totalPrice: number;
}

const Details: React.FC<Props> = ({ detailsItems, removeOrder, totalPrice }) => {
  return (
    <div className="details">
      <h2>Order Details</h2>
      {detailsItems.length === 0? (
        <p>Соберите себе лук</p>
      ) : (
        <>
          <ul>
            {detailsItems.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => removeOrder(index, item.price)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <p>Total price: {totalPrice} $</p>
        </>
      )}
    </div>
  );
};

export default Details;