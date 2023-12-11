import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Increment from "./Increment";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/increment" element={<Increment />} />
      </Routes>
    </div>
  );
}

export default App;
