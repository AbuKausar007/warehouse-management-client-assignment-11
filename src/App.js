import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/LandingPage/Home/Home";
import Inventory from "./pages/LandingPage/Inventory/Inventory";
import Header from "./pages/Shared/Header/Header";
import Login from "./pages/SignUp/Login/Login";
import Register from "./pages/SignUp/Register/Register";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
