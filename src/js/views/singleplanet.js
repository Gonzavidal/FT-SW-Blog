import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.getoneplanet(params.theid);
  }, []);

  return (
    <div className="card mb-3" style={{ maxWidth: "1040px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={
              "https://starwars-visualguide.com/assets/img/planets/" +
              params.theid +
              ".jpg"
            }
            className="card-img-top"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">{store.oneplanet.name}</h2>
            <h5 className="card-text">Climate: {store.oneplanet.climate}</h5>
            <h5 className="card-text">Diameter: {store.oneplanet.diameter}</h5>
            <h5 className="card-text">
              Gravity: {store.oneplanet.gravity}
            </h5>{" "}
            <h5 className="card-text">
              Orbital Period: {store.oneplanet.orbital_period}
            </h5>
            <h5 className="card-text">
              Population: {store.oneplanet.population}
            </h5>
            <h5 className="card-text">
              Rotation Period: {store.oneplanet.rotation_period}
            </h5>
            <h5 className="card-text">
              Surface Water: {store.oneplanet.surface_water}
            </h5>
            <h5 className="card-text">Terrain: {store.oneplanet.terrain}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
