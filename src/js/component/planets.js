import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Logo from "../../img/sw logo.png"



export const Planets = () => {
  const { actions, store } = useContext(Context);
  return (
    <div className="d-flex flex-nowrap overflow-auto">
      {store.planets.map((value) => {
        return (
          <div className="card mx-2" style={{ minWidth: "18rem" }} key={value.name}>
            <img
               src={Logo}
               className="card-img-top"
               alt="..."
               width="300"
            />
            <div className="card-body">
              <h5 className="card-title">{value.name}</h5>
            </div>
            <div className="d-flex justify-content-between p-2">
            <Link to={"/singleplanet/"+ value.uid} className="btn btn-warning text-dark">
            This is the Way
            </Link>
            <button type="button" className="btn btn-warning" onClick={()=>{actions.favorites(value.name)}}><i className="far fa-heart text-dark" style={{color: "#ffd43b"}}></i></button>
            </div>
          </div>
        );
      })}
    </div>
  );
};