import React from "react";

export default function InnerPopup({ entry }) {
  return (
    <div className="popup-wrapper">
      <h4 className="popup-title">
        {entry.provinceState !== null
          ? entry.provinceState + ", " + entry.countryRegion
          : entry.countryRegion}
      </h4>
      <p className="popup-text"> Last Update : Today </p>    
      <p className="popup"> Confirmed : {entry.confirmed} </p>
      <p className="popup"> Death : {entry.deaths} </p>
      <p className="popup"> Recovered : {entry.recovered} </p>
    </div>
  );
}
