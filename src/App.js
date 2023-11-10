import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Products } from "./components/Products";
import { NuevoProducto } from "./components/NuevoProducto";
import { EditarProducto } from "./components/EditarProducto";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <div className="container">
          <Routes>
            <Route index element={<Products />} />
            <Route path="/nuevo-producto" element={<NuevoProducto/>}/>
            <Route path="/nuevo-producto/editar/:id" element={<EditarProducto/>}/>
          </Routes >
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
