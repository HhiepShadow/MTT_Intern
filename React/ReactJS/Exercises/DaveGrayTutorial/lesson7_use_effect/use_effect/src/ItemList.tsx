import LineItem from "./LineItem";
import { Item } from './Item'

const ItemList = ({
  items,
  handleCheck,
  handleDelete,
}: {
  items: Item[],
  handleCheck: (id: number) => void,
  handleDelete: (id: number) => void,
}) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ItemList;
