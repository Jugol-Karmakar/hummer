import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import SignIn from "./pages/Login/SignIn/SignIn";
import SignUp from "./pages/Login/SignUp/SignUp";
import Header from "./pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
