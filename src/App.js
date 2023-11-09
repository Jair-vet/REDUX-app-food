import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Products } from "./components/Products";
import { NuevoProducto } from "./components/NuevoProducto";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <div className="container">
          <Routes>
            <Route index element={<Products />} />
            <Route path="/nuevo-producto" element={<NuevoProducto/>}/>
          </Routes >
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
