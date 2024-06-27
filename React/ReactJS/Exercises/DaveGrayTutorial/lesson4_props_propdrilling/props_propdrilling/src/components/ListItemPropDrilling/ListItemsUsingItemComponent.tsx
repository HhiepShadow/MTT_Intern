import Item from "../Item";

type ItemList = {
  id: number;
  checked: boolean;
  name: string;
};

const ListItems = ({
  items,
  handleCheck,
  handleDelete,
}: {
  items: ItemList[];
  handleCheck: (id: number) => void;
  handleDelete: (id: number) => void;
}) => {
  return (
    <ul>
      {items.map((item) => (
          <Item
              item={item}
              key={item.id}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
          />
      ))}
    </ul>
  );
};

export default ListItems;
