import "./App.css";

import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer";
import Player from "./components/Player/Player";
import Detail from "./components/Detail/Detail";
import { Routes, Route } from "react-router-dom";

//import Player from './components/Player';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Player />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
