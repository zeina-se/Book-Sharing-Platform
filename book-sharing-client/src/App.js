import Navbar from "./components/ui/structure/NavBar";
import ListBooks from "./components/ui/ListBooks";
import "./styles/App.css";
import "./styles/colors.css";
import "./styles/index.css";
import "./styles/utilities.css";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Authentication from "./pages/Authentication";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <BrowserRouter>
      <Navbar />
        {/* <NavBar username={"Taha"} /> */}
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/ListBooks" element={<ListBooks />} />
          {/* <Route path="/posts" element={<posts />} /> */}
          {/* 
          <Route path="/profile" element={<Profile />} />
          <Route path="/singleView" element={<SingleView />} /> */}
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
