import React from "react";

interface Props {
  detailsItems: string[];
  removeOrder: (index: number) => void;
}

const Details: React.FC<Props> = ({ detailsItems, removeOrder }) => {
  return (
    <div className="details">
      <h2>Order Details</h2>
      {detailsItems.length === 0? (
        <p>Соберите себе лук</p>
      ) : (
        <ul>
          {detailsItems.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => removeOrder(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Details;