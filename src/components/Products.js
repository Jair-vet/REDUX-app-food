import productos from '../data/db.json'

export const Products = () => {
    return (
      <>
        <h2 className="text-center text-3xl font-bold p-4">Listado de Productos</h2>
        <div className='m-3'>
          <table className='w-full rounded-md'>
            <thead className="bg-emerald-600">
              <tr className='rounded-md'>
                <th className='text-white text-center p-2'>Nombre</th>
                <th className='text-white text-center p-2'>Precio</th>
                <th className='text-white text-center p-2 rounded-r-md'>Acciones</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </>
    )
  }
  