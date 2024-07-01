import { Item } from "./Item";
import ItemList from "./ItemList";

const Content = ({
  items,
  handleCheck,
  handleDelete,
}: {
  items: Item[];
  handleCheck: (id: number) => void;
  handleDelete: (id: number) => void;
}) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Your list is empty.
        </div>
      )}
    </main>
  );
};

export default Content;
