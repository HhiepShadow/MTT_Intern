import { useEffect, useState } from "react";
import "./App.css";
import Button from "./Button";
import { URL } from "./api/URL";
import List from "./List";

function App() {
  const btnTypes: string[] = ["users", "posts", "comments"];
  const [reqType, setReqType] = useState<string>('users');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: Response = await fetch(`${URL}/${reqType}`);
        const data = await response.json();
        console.log(data);
        setItems(data);
      } catch (err) {
        if (err instanceof Error) {
          console.log(err.message);
        } else {
          console.log(err);
        }
      }
    }

    fetchData();
  }, [reqType]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          height: '50px'
        }}
      >
        {btnTypes.map((btn) => (
          <Button btnText={btn} reqType={reqType} setReqType={setReqType} />
        ))}
      </div>
      <div>
        <List items={items} />
      </div>
    </>
  );
}

export default App;
