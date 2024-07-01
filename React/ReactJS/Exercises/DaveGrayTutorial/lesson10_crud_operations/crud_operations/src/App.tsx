import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import { Item } from "./Item";
import AddItem from "./AddItem";
import SearchItem from "./Search/SearchItem";
import Content from "./Content";
import { URL } from "./data";
import apiRequest from "./api/apiRequest";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  // Loading state from LocalStorage:
  //const [items, setItems] = useState<Item[]>(JSON.parse(localStorage.getItem('listItems')));

  const [newItem, setNewItem] = useState<string>("");

  // Search State:
  const [search, setSearch] = useState<string>("");

  // Error:
  const [error, setError] = useState<Error | null>(null);

  // Loading:
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // UseEffect Hook:
  // useEffect(() => {
  //   console.log("updating items state");
  //   const listItemsString = localStorage.getItem("listItems");
  //   if (listItemsString !== null && listItemsString !== "undefined") {
  //     try {
  //       const listItems: Item[] = JSON.parse(listItemsString);
  //       setItems(listItems);
  //     } catch (error) {
  //       console.error("Error parsing listItems from localStorage:", error);
  //       // Xử lý lỗi, ví dụ như gán mảng rỗng cho items
  //       setItems([]);
  //     }
  //   }
  // }, [items]);

  // Use effect with fetch:
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: Response = await fetch(URL);
        if (!response.ok) {
          throw Error("Did not received expected data");
        }
        const listItems: Item[] = await response.json();
        setItems(listItems);
        console.log(listItems);
        setError(null);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.log(err.stack);
          setError(err);
        } else {
          console.log(err);
        }
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      (async () => await fetchData())();
    }, 2000);
  }, []);

  const handleCheck = async (id: number) => {
    const newItemList: Item[] = items.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          checked: !item.checked,
        };
      } else {
        return item;
      }
    });
    setAndSaveItems(newItemList);
    //localStorage.setItem('listItems', JSON.stringify(newItemList));

    // PUT REQUEST:
    const updatedItem: Item[] = newItemList.filter((item) => item.id === id);
    const updateOptions: object = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        checked: updatedItem[0].checked,
      }),
    };

    const reqUrl: string = `${URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) {
      setError(result);
    } 
  };

  const handleDelete = async (id: number) => {
    const newItemList: Item[] | null = items.filter((item) => item.id !== id);
    setAndSaveItems(newItemList);
    //localStorage.setItem('listItems', JSON.stringify(newItemList));

    // DELETE REQUEST:
    const deleteOptions: object = {
      method: 'DELETE'
    };

    const reqUrl: string = `${URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) {
      setError(result);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newItem) return;

    addItem(newItem);

    // addItem:
    setNewItem("");
  };

  const addItem = async (item: string) => {
    const id = items.length ? Number(items[items.length - 1].id) + 1 : 1;
    const myNewItem: Item = {
      id: id,
      checked: false,
      name: item,
    };
    const newListItem: Item[] = [...items, myNewItem];
    setItems(newListItem);

    // POST REQUEST:
    const postOptions: object = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myNewItem),
    };

    const result = await apiRequest(URL, postOptions);
    if (result) {
      setError(result);
    }
  };

  const setAndSaveItems = (newItems: Item[]): void => {
    setItems(newItems);
    localStorage.setItem("listItems", JSON.stringify(newItems));
  };

  return (
    <>
      <Header title="List Item" />
      <SearchItem search={search} setSearch={setSearch} />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <div>
        {isLoading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Loading...
          </div>
        )}
        {error && <p style={{ color: "red" }}>{`Error: ${error}`}</p>}
        {!error && !isLoading && (
          <Content
            items={items.filter((item) => {
              if (search) {
                return item.name.toLowerCase().includes(search.toLowerCase());
              } else {
                return item;
              }
            })}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </div>
      <Footer length={items.length} />
    </>
  );
}

export default App;
