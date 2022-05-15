import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddInventory from "./pages/AddInventory/AddInventory";
import Home from "./pages/LandingPage/Home/Home";
import Inventory from "./pages/LandingPage/Inventory/Inventory";
import ManageInventories from "./pages/ManageInventories/ManageInventories";
import Header from "./pages/Shared/Header/Header";
import Login from "./pages/SignUp/Login/Login";
import Register from "./pages/SignUp/Register/Register";
import RequireAuth from "./pages/SignUp/RequireAuth/RequireAuth";
import StockUpdate from "./pages/StockUpdate/StockUpdate";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <StockUpdate></StockUpdate>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageInventories"
          element={<ManageInventories></ManageInventories>}
        ></Route>
        <Route
          path="/addInventory"
          element={<AddInventory></AddInventory>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
