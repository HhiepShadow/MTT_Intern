import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import ContentPropDrilling from "./components/ContentPropDrilling";
import Notification from "./components/Notification";
import { itemsData  } from "./data/data";

function App() {
  const [items, setItems] = useState(itemsData);

  const handleCheck = (id: number) => {
    const listItems = items.map((item) =>
      item.id === id
        ? {
            ...item,
            checked: !item.checked,
          }
        : item
    );
    setItems(listItems);
    localStorage.setItem("listItems", JSON.stringify(listItems));
  };

  const handleDelete = (id: number) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("listItems", JSON.stringify(listItems));
    alert(id);
  };
  return (
    <>
      <Header />
      <Content />

      <ContentPropDrilling
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Notification length={items.length} />
      <Footer />
    </>
  );
}

export default App;
