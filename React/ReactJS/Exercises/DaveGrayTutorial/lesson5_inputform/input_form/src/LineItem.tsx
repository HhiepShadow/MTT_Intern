import { FaTrashAlt } from "react-icons/fa";
import { Item } from './Item';

const LineItem = ({ item, handleCheck, handleDelete }: {
    item: Item,
    handleCheck: (id: number) => void,
    handleDelete: (id: number) => void
}) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <label
        style={{
          textDecoration: item.checked ? "line-through" : "none",
        }}
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.name}
      </label>
      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex={0}
        aria-label={`Delete ${item.name}`}
      />
    </li>
  );
};

export default LineItem;
