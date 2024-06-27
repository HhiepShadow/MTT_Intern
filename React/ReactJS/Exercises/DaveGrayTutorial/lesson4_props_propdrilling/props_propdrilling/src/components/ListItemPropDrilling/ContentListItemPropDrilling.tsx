import ListItems from "./ListItems";

type Item = {
  id: number;
  checked: boolean;
  name: string;
};

const ContentListItemPropDrilling = ({
  items,
  handleCheck,
  handleDelete,
}: {
  items: Item[];
  handleCheck: (id: number) => void;
  handleDelete: (id: number) => void;
}) => {
  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
          {items.length ? (
              <ListItems
                  items={items}
                  handleCheck={handleCheck}
                  handleDelete={handleDelete}
              />
          ) : (
                  <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                  }}>
                      Your list is empty
                  </div>
      )}
    </div>
  );
};

export default ContentListItemPropDrilling;
