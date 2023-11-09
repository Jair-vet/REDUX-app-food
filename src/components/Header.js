import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <nav className="text-center bg-emerald-600 p-4">
        <div className="flex md:flex-row flex-col justify-center">
            <div className="container">
                <h1 className="text-4xl md:text-left  text-white font-bold"> CRUD - React, Redux, REST API & Axios </h1>
            </div>

            <div className="md:flex md:w-1/3 md:justify-end md:mt-0 mt-3">
                <Link 
                    className="btn btn-danger nuevo-post d-block d-md-inline-block"
                    to="nuevo-producto">Agregar Producto &#43;
                </Link>
            </div>
        </div>
    </nav>
  )
}
