import {Routes, Route} from "react-router-dom"
import './App.css';
import Photos from "./pages/Photos"
import Cart from "./pages/Cart"
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Photos />}/>
        <Route exact path="/cart" element={<Cart />}/>
      </Routes>
    </div>
  );
}

export default App;
