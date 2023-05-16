import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Logo from "../../img/sw logo.png"

export const People = () => {
  const { actions, store } = useContext(Context);
  return (
    <div className="d-flex flex-nowrap overflow-auto">
      {store.people.map((value) => {
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
            <Link to={"/single/"+ value.uid} className="btn btn-primary">
              Go somewhere
            </Link>
            <button type="button" className="btn btn-light" onClick={()=>{actions.favorites(value.name)}}><i className="far fa-heart" style={{color: "#ffd43b"}}></i></button>
            </div>
          </div>
        );
      })}
    </div>
  );
};