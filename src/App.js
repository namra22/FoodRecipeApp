import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Favourite from "./pages/favourite/Favourite";
import Detail from "./pages/detail/Detail";

function App() {
  return (
    <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
      <Navbar />
      <Routes>
        <Route path="/FoodRecipeApp" element={<Home />} />
        <Route path="/favourites" element={<Favourite />} />
        <Route path="/recepie-details/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
