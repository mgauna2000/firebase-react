import "./App.css";
// import { CardList } from './components/CardList/CardList';
// import Item from './components/Item/Item';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
// import ItemCount from './components/ItemCount/ItemCount';
import { Navbar } from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import NotFound from "./pages/NotFound";
import Detalle from "./pages/Detalle";
import ProductsList from "./pages/ProductsList";
import { CartProvider } from "./context/CardContext";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/nosotros" element={<Nosotros />} />
          <Route exact path="/products/:category" element={<ProductsList />} />
          <Route exact path="/productos/:id" element={<Detalle />} />
          <Route exact path="/cart" element={<Cart />} />
          {/* <Route exact path="/products/:category" element={<h2>pagina de productos</h2>} /> */}
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* <CardList/> */}
      {/* <Item/> */}
      {/* <ItemDetailContainer /> */}
      </CartProvider>
    </div>
  );
}

export default App;
