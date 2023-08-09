import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/NewBeer" element={<NewBeer />} />
      <Route path="/RandomBeer" element={<RandomBeer />} />
    </Routes>
  );
}

export default App;
