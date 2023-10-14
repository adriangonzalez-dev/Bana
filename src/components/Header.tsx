
export const Header = () => {
  return (
    <>
    <div className="w-full py-2 bg-bana-pink text-black flex items-center justify-center gap-2 flex-wrap">
        <h1>BANA</h1>
        <p>Accesorios con resina</p>
    </div>
          <div className="navbar bg-base-100 shadow-md flex justify-between">
              <div className="navbar-center">
                  <div className="dropdown">
                      <label tabIndex={0} className="btn lg:hidden">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                      </label>
                      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                          <li ><a>Inicio</a></li>
                          <li>
                              <a>Productos</a>
                              <ul className="p-2">
                                  <li><a>Productos 1</a></li>
                                  <li><a>Productos 2</a></li>
                              </ul>
                          </li>
                          <li>
                              <a>Información</a>
                              <ul className="p-2">
                                  <li><a>Info 1</a></li>
                                  <li><a>Info 2</a></li>
                              </ul>
                          </li>
                          <li><a>Contacto</a></li>
                      </ul>
                  </div>
              </div>
              <div className="navbar-start hidden lg:flex">
                  <ul className="menu menu-horizontal px-1">
                      <li><a>Inicio</a></li>
                      <li tabIndex={0}>
                          <details>
                              <summary>Productos</summary>
                              <ul className="p-2">
                                  <li><a>Productos 1</a></li>
                                  <li><a>Productos 2</a></li>
                              </ul>
                          </details>
                      </li>
                      <li tabIndex={0}>
                          <details>
                              <summary>Información</summary>
                              <ul className="p-2">
                                  <li><a>Info 1</a></li>
                                  <li><a>Info 2</a></li>
                              </ul>
                          </details>
                      </li>
                      <li className="hover:bg-bana-pink"><a>Contacto</a></li>
                  </ul>
              </div>
              <div className="relative navbar-center">
                  <label htmlFor="Search" className="sr-only"> Search </label>

                  <input
                      type="text"
                      id="Search"
                      placeholder="Buscar..."
                      className="w-full rounded-md focus:outline-bana-pink border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
                  />

                  <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                      <button type="button" className="text-gray-600 hover:text-gray-700">
                          <span className="sr-only">Buscar</span>

                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-4 w-4"
                          >
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                              />
                          </svg>
                      </button>
                  </span>
              </div>
              <div className="navbar-center hidden lg:flex">
                  <a className="btn p-2 hover:bg-bana-pink">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                      >
                          <defs>
                              <style>
                                  {
                                      ".cls-1{fill:none;stroke:#020202;stroke-miterlimit:10;stroke-width:1.91px}"
                                  }
                              </style>
                          </defs>
                          <g id="handbag">
                              <path
                                  d="M3.41 7.23h17.18v12a3.23 3.23 0 0 1-3.23 3.23H6.64a3.23 3.23 0 0 1-3.23-3.23v-12Z"
                                  className="cls-1"
                              />
                              <path
                                  d="M8.18 10.09V5.32A3.82 3.82 0 0 1 12 1.5a3.82 3.82 0 0 1 3.82 3.82v4.77"
                                  className="cls-1"
                              />
                          </g>
                      </svg>
                  </a>
              </div>
          </div>
      </>
  )
}
