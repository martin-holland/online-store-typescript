import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import List from "./components/List";
import StoreNavbar from "./components/StoreNavbar";

function App() {
  return (
    <div className="App">
      <StoreNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
