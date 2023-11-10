
export const EditarProducto = () => {
  return (
    <div className="rounded-md p-4 mt-4">
      <form className="bg-gray-200 py-10 px-5 w-full rounded-lg shadow">
        <h1 className="text-center text-3xl font-bold">Editar Producto</h1>
        <div className="p-3">
          
          {/* Nombre Producto */}
          <div className="flex flex-col mt-2">
            <label
              className='uppercase text-gray-400 block text-lg font-bold'
              htmlFor='nombre-producto'
            >Nombre Producto</label>
            <input 
              type="text"
              id='nombre-producto'
              className="border-2 w-full p-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring focus:ring-emerald-600"
              placeholder="Nombre Producto"
              name="nombre"
            />
          </div>
          
          {/* Precio Producto */}
          <div className="flex flex-col mt-2">
            <label
              className='uppercase text-gray-400 block text-lg font-bold'
              htmlFor='precio-producto'
            >Precio Producto</label>
            <input 
              type="number"
              id='precio-producto'
              className="border-2 w-full p-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring focus:ring-emerald-600"
              placeholder="Precio Producto"
              name="precio"
            />
          </div>

          {/* Boton Agregar Producto */}
          <input
            type="submit"
            className='mt-4 duration-300 bg-emerald-600 hover:bg-emerald-700 w-full p-2 text-white uppercase font-bold cursor-pointer transition-colors rounded text-sm'
            value='Guardar Cambios'
          />
        </div>
      </form>
    </div>
  )
}
