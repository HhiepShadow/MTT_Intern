import { useState } from 'react'
import './App.css'
import Footer from './Footer'
import Header from './Header'
import { data } from './data';
import ItemList from './ItemList';
import { Item } from './Item';
import AddItem from './AddItem';
import SearchItem from './Search/SearchItem';
import Content from './Content';

function App() {
  const [items, setItems] = useState<Item[]>(data);

  // Loading state from LocalStorage:
  //const [items, setItems] = useState<Item[]>(JSON.parse(localStorage.getItem('listItems')));

  const [newItem, setNewItem] = useState<string>('');

  // Search State:
  const [search, setSearch] = useState<string>('');

  const handleCheck = (id: number) => {
    const newItemList: Item[] = items.map((item) => {
      if (id === item.id) {
        return {
          ...item, 
          checked: !item.checked
        }
      } else {
        return item;
      }
    });
    setAndSaveItems(newItemList);
    //localStorage.setItem('listItems', JSON.stringify(newItemList));
  }

  const handleDelete = (id: number) => {
    const newItemList: Item[] | null = items.filter(item => item.id !== id);
    setAndSaveItems(newItemList);
    //localStorage.setItem('listItems', JSON.stringify(newItemList));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newItem) return;

    addItem(newItem);

    // addItem:
    setNewItem('');
  }

  const addItem = (item: string) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem: Item = {
      id: id,
      checked: false,
      name: item
    };
    const newListItem: Item[] = [...items, myNewItem];
    setItems(newListItem);
  };

  const setAndSaveItems = (newItems: Item[]): void => {
    setItems(newItems);
    localStorage.setItem('listItems', JSON.stringify(newItems));
  }

  return (
    <>
      <Header title="List Item" />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items.filter(item => {
          if (search) {
            return item.name.toLowerCase().
              includes(search.toLowerCase());
          } else {
            return item;
          }
        })}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </>
  )
}

export default App
