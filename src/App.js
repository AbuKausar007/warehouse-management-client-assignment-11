import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddInventory from "./pages/AddInventory/AddInventory";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/LandingPage/Home/Home";
import ManageInventories from "./pages/ManageInventories/ManageInventories";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./pages/Shared/Header/Header";
import Login from "./pages/SignUp/Login/Login";
import Register from "./pages/SignUp/Register/Register";
import RequireAuth from "./pages/SignUp/RequireAuth/RequireAuth";
import StockUpdate from "./pages/StockUpdate/StockUpdate";
import MyItems from "./pages/MyItems/MyItems";
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
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
          element={
            <RequireAuth>
              <ManageInventories></ManageInventories>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addInventory"
          element={
            <RequireAuth>
              <AddInventory></AddInventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myItems"
          element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
