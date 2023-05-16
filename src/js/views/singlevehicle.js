import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleVehicles = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.getonevehicle(params.theid);
  }, []);

  return (
    <div className="card mb-3" style={{ maxWidth: "1040px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={
              "https://starwars-visualguide.com/assets/img/vehicles/" +
              params.theid +
              ".jpg"
            }
            className="card-img-top"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">{store.onevehicle.name}</h2>
            <h5 className="card-text">
              Cargo Capacity: {store.onevehicle.cargo_capacity}
            </h5>
            <h5 className="card-text">
              Consumables: {store.onevehicle.consumables}
            </h5>
            <h5 className="card-text">
              Cost In Credits: {store.onevehicle.cost_in_credits}
            </h5>{" "}
            <h5 className="card-text">Crew: {store.onevehicle.crew}</h5>
            <h5 className="card-text">
              Manufacturer: {store.onevehicle.manufacturer}
            </h5>
            <h5 className="card-text">
              Max Atmosphering Speed: {store.onevehicle.max_atmosphering_speed}
            </h5>
            <h5 className="card-text">Model: {store.onevehicle.model}</h5>
            <h5 className="card-text">
              Passengers: {store.onevehicle.passengers}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
