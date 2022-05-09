import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home/Home";
import Inventory from "./pages/Home/Inventory/Inventory";
import InventoryUpdate from "./pages/InventoryUpdate/InventoryUpdate";
import Requireauth from "./pages/Login/Requireauth/Requireauth";
import SignIn from "./pages/Login/SignIn/SignIn";
import SignUp from "./pages/Login/SignUp/SignUp";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route
          path="/inventory/:id"
          element={
            <Requireauth>
              <InventoryUpdate></InventoryUpdate>
            </Requireauth>
          }
        ></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
