import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import UpdateUser from "./UpdateUser";
import CreateUser from "./CreateUser";
import User from "./Users";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />}></Route>
          <Route path="/create" element={<CreateUser />}></Route>
          <Route path="/update" element={<UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
