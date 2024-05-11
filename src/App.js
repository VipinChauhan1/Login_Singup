import "./App.css";
import Singup from "./Component/Singup";
import Login from "./Component/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route path="/singup" element={<Singup />}></Route>
        <Route path="/" element={<Login />}></Route>
      </Routes>
  );
  
}

export default App;
