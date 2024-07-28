import { Route, Routes } from "react-router-dom";
import "./App.css";
import Provinces from "./components/Province/Provinces";
import District from "./components/Province/Districts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Provinces />}></Route>
      <Route path="/:id" element={<District />}></Route>
    </Routes>
  );
}

export default App;
