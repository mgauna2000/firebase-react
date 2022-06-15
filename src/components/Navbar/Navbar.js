import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="otakus.png" alt="" style={{ height: "50px" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="dropdown-item p-2">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/nosotros" className="dropdown-item p-2">
                  Nosotros
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ¿Que vendemos?
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/products/mangas" className="dropdown-item">
                      Mangas
                    </Link>
                  </li>
                  <li>
                  <Link to="/products/cuadros" className="dropdown-item">
                      Cuadros
                    </Link>
                  </li>
                  <li>
                  <Link to="/products/funkos" className="dropdown-item">
                      Funko Pop's
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar..."
                aria-label="Search"
              />
              <button className="btn btn-outline-dark" type="submit">
                Buscar
              </button>
            </form>
            <CartWidget />
          </div>
        </div>
      </nav>
    </>
  );
};
