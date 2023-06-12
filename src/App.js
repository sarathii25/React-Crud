import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"; //manual
import Emplisting from "./Emplisting";
import Empcreate from "./Empcreate";
import Empdetail from "./Empdetail";
import Empedit from "./Empedit";

function App() {
  return (
    <div className="App">
      <h1>React CRUD Operations </h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Emplisting />}></Route>
          <Route path="/employee/create" element={<Empcreate/>}></Route>
          <Route path="/employee/detail/:empid" element={<Empdetail/>}></Route>
          <Route path="/employee/edit/:empid" element={<Empedit/>}></Route>
        </Routes>
      </BrowserRouter>
      ;
    </div>
  );
}

export default App;
