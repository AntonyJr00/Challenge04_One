import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NewVideo from "./Pages/NewVideo/NewVideo";
import NewCategory from "./Pages/NewCategory/NewCategory";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formvideo" element={<NewVideo />} />
        <Route path="/formcategory" element={<NewCategory />} />
      </Routes>
    </>
  );
}

export default App;
