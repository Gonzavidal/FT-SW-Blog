import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Logo from "../../img/sw logo.png"

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-dark  mb-3">
      <Link to="/">
        <img src={Logo} className="img-fluid" width="100"/>
      </Link>
      <div className="ml-auto">
        <div class="btn-group">
          <button
            type="button"
            class="btn btn btn-warning dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul class="dropdown-menu">
            {store.favs.map((value) => {
              return (
                <li>
                  {value}
                  <i
                    class="fas fa-trash ms-1"
                    onClick={() => {
                      actions.favorites(value);
                    }}
                    style={{ color: "#ff0000" }}
                  ></i>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
