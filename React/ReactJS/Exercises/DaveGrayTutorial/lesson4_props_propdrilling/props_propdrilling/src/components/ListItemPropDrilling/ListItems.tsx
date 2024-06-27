import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

type Item = {
    id: number;
    checked: boolean;
    name: string;
}

const ListItems = ({ items, handleCheck, handleDelete }: {
    items: Item[],
    handleCheck: (id: number) => void,
    handleDelete: (id: number) => void
}) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} className="item">
          <input
            onChange={() => handleCheck(item.id)}
            type="checkbox"
            checked={item.checked}
          />
          <label
            style={
              item.checked
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            {item.name}
          </label>
          {/* <button>Delete</button> */}
          <FaTrashAlt
            role="button"
            tabIndex={0}
            onClick={() => handleDelete(item.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default ListItems